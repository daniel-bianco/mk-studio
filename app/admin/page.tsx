'use client'
import React, { useMemo, useState } from 'react'

type User = {
    id: string
    name: string
    email: string
    role: 'admin' | 'editor' | 'viewer'
    active: boolean
}

function uid() {
    return Math.random().toString(36).slice(2, 9)
}

const initialUsers: User[] = [
    { id: uid(), name: 'Alex Johnson', email: 'alex@example.com', role: 'admin', active: true },
    { id: uid(), name: 'Maya Patel', email: 'maya@example.com', role: 'editor', active: true },
    { id: uid(), name: 'Sam Lee', email: 'sam@example.com', role: 'viewer', active: false },
]

export default function AdminPage() {
    const [users, setUsers] = useState<User[]>(initialUsers)
    const [query, setQuery] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [editing, setEditing] = useState<User | null>(null)
    const [maintenance, setMaintenance] = useState(false)
    const [siteTitle, setSiteTitle] = useState('My Website')

    const filtered = useMemo(
        () => users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()) || u.email.toLowerCase().includes(query.toLowerCase())),
        [users, query]
    )

    function addUser(payload: Omit<User, 'id'>) {
        setUsers(prev => [{ id: uid(), ...payload }, ...prev])
        setShowForm(false)
    }

    function updateUser(id: string, payload: Partial<User>) {
        setUsers(prev => prev.map(u => (u.id === id ? { ...u, ...payload } : u)))
        setEditing(null)
    }

    function removeUser(id: string) {
        if (!confirm('Delete this user?')) return
        setUsers(prev => prev.filter(u => u.id !== id))
    }

    function toggleActive(id: string) {
        setUsers(prev => prev.map(u => (u.id === id ? { ...u, active: !u.active } : u)))
    }

    return (
        <div className="flex h-screen font-sans">
            <aside className="w-48 p-5 border-r bg-gray-50">
                <h2 className="text-lg font-semibold m-0">Admin</h2>
                <nav className="mt-4 space-y-1">
                    <div className="px-2 py-1 text-gray-700 rounded">Dashboard</div>
                    <div className="px-2 py-1 text-gray-900 font-semibold rounded">Users</div>
                    <div className="px-2 py-1 text-gray-700 rounded">Settings</div>
                    <div className="px-2 py-1 text-gray-700 rounded">Logs</div>
                </nav>
            </aside>

            <main className="flex-1 p-6 overflow-auto">
                <header className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-xl font-semibold m-0">{siteTitle} — Admin</h1>
                        <small className="text-gray-500">Overview and management</small>
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" checked={maintenance} onChange={e => setMaintenance(e.target.checked)} className="form-checkbox h-4 w-4" />
                            Maintenance
                        </label>
                        <button onClick={() => alert('Settings saved')} className="bg-gray-100 text-gray-900 px-3 py-2 rounded">
                            Save
                        </button>
                    </div>
                </header>

                <section className="flex gap-3">
                    <Card title="Total users" value={String(users.length)} />
                    <Card title="Active users" value={String(users.filter(u => u.active).length)} />
                    <Card title="Roles" value={String(Array.from(new Set(users.map(u => u.role))).length)} />
                </section>

                <section className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <input
                            placeholder="Search users..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            className="px-3 py-2 rounded border border-gray-200 min-w-[180px]"
                        />
                        <button onClick={() => { setShowForm(true); setEditing(null) }} className="bg-blue-600 text-white px-3 py-2 rounded">
                            Add user
                        </button>
                        <input
                            value={siteTitle}
                            onChange={e => setSiteTitle(e.target.value)}
                            className="px-3 py-2 rounded border border-gray-200 w-56"
                        />
                    </div>
                </section>

                <section className="mt-4">
                    <div className="mt-3 rounded overflow-hidden bg-white shadow">
                        <div className="grid" style={{ gridTemplateColumns: '2fr 2fr 120px 100px 80px' }}>
                            <div className="p-3 bg-gray-50 font-semibold">Name</div>
                            <div className="p-3 bg-gray-50 font-semibold">Email</div>
                            <div className="p-3 bg-gray-50 font-semibold">Role</div>
                            <div className="p-3 bg-gray-50 font-semibold">Status</div>
                            <div className="p-3 bg-gray-50 font-semibold" />
                        </div>

                        {filtered.length === 0 && <div className="p-5 text-gray-500">No users found.</div>}
                        {filtered.map(u => (
                            <div key={u.id} className="grid items-center border-b" style={{ gridTemplateColumns: '2fr 2fr 120px 100px 80px' }}>
                                <div className="p-3">
                                    <div className="font-semibold">{u.name}</div>
                                </div>
                                <div className="p-3 text-gray-700">{u.email}</div>
                                <div className="p-3">{u.role}</div>
                                <div className="p-3">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={u.active} onChange={() => toggleActive(u.id)} className="form-checkbox h-4 w-4" />
                                        <span className={u.active ? 'text-green-600' : 'text-gray-500'}>{u.active ? 'Active' : 'Disabled'}</span>
                                    </label>
                                </div>
                                <div className="p-3 flex gap-2">
                                    <button onClick={() => setEditing(u)} className="bg-gray-100 px-2 py-1 rounded text-sm">Edit</button>
                                    <button onClick={() => removeUser(u.id)} className="bg-red-100 border border-red-200 px-2 py-1 rounded text-sm">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {(showForm || editing) && (
                <Modal onClose={() => { setShowForm(false); setEditing(null) }}>
                    <UserForm
                        initial={editing ?? { name: '', email: '', role: 'viewer', active: true }}
                        onCancel={() => { setShowForm(false); setEditing(null) }}
                        onSubmit={data => {
                            if (editing) updateUser(editing.id, data)
                            else addUser(data as Omit<User, 'id'>)
                        }}
                    />
                </Modal>
            )}
        </div>
    )
}

function Card({ title, value }: { title: string; value: string }) {
    return (
        <div className="p-3 rounded bg-white shadow min-w-[140px]">
            <div className="text-gray-500 text-sm">{title}</div>
            <div className="text-2xl font-bold">{value}</div>
        </div>
    )
}

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white p-5 rounded w-[520px] max-w-[95%]" onClick={e => e.stopPropagation()}>
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-lg bg-transparent border-0">✕</button>
                </div>
                {children}
            </div>
        </div>
    )
}

function UserForm({ initial, onSubmit, onCancel }: {
    initial: Partial<User>
    onSubmit: (data: Partial<User>) => void
    onCancel: () => void
}) {
    const [name, setName] = useState(initial.name ?? '')
    const [email, setEmail] = useState(initial.email ?? '')
    const [role, setRole] = useState<User['role']>(initial.role ?? 'viewer')
    const [active, setActive] = useState(!!initial.active)

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                if (!name || !email) return alert('Name and email required')
                onSubmit({ name, email, role, active })
            }}
            className="grid gap-3"
        >
            <h3 className="m-0">{initial.name ? 'Edit user' : 'New user'}</h3>

            <label className="block text-sm text-gray-700">
                Name
                <input value={name} onChange={e => setName(e.target.value)} className="mt-1 px-3 py-2 rounded border border-gray-200 w-full" />
            </label>

            <label className="block text-sm text-gray-700">
                Email
                <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 px-3 py-2 rounded border border-gray-200 w-full" />
            </label>

            <label className="block text-sm text-gray-700">
                Role
                <select value={role} onChange={e => setRole(e.target.value as User['role'])} className="mt-1 px-3 py-2 rounded border border-gray-200 w-full">
                    <option value="admin">admin</option>
                    <option value="editor">editor</option>
                    <option value="viewer">viewer</option>
                </select>
            </label>

            <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={active} onChange={e => setActive(e.target.checked)} className="form-checkbox h-4 w-4" />
                Active
            </label>

            <div className="flex gap-2 mt-2">
                <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded">Save</button>
                <button type="button" onClick={onCancel} className="bg-gray-100 text-gray-900 px-3 py-2 rounded">Cancel</button>
            </div>
        </form>
    )
}