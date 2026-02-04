"use client";

import { useEffect, useState } from "react";
import { db, auth } from "../../components/lib/firebase";
import { collection, onSnapshot, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { FaTrash, FaEdit, FaPlus, FaSave, FaTimes, FaLock } from "react-icons/fa";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ service: "", description: "", price: "" });
  const [editId, setEditId] = useState<string | null>(null);

  // 1. Проверка авторизации
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 2. Получение данных (только если залогинен)
  useEffect(() => {
    if (!user) return;
    const unsubscribe = onSnapshot(collection(db, "services"), (snapshot) => {
      setServices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert("Ошибка входа: проверьте данные");
    }
  };

  const handleLogout = () => signOut(auth);

  // --- Методы CRUD (handleSubmit, handleDelete, startEdit) остаются такими же, как были ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.service || !formData.price) return;
    const data = { ...formData, price: Number(formData.price) };
    if (editId) {
      await updateDoc(doc(db, "services", editId), data);
      setEditId(null);
    } else {
      await addDoc(collection(db, "services"), data);
    }
    setFormData({ service: "", description: "", price: "" });
  };

  const handleDelete = async (id: string) => {
    if (confirm("Удалить?")) await deleteDoc(doc(db, "services", id));
  };

  if (loading) return <div className="h-screen bg-black flex items-center justify-center text-[#c8a46e]">ЗАГРУЗКА...</div>;

  // ЭКРАН ЛОГИНА
  if (!user) {
    return (
      <div className="h-screen bg-black flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="bg-[#111] p-8 border border-white/10 w-full max-w-sm">
          <div className="flex justify-center mb-6 text-[#c8a46e]"><FaLock size={40} /></div>
          <h2 className="text-center font-serif text-2xl mb-8 tracking-widest text-white">MK STUDIO ADMIN</h2>
          <input 
            type="email" placeholder="Email" 
            className="w-full bg-black border border-white/10 p-3 mb-4 text-white outline-none focus:border-[#c8a46e]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" placeholder="Пароль" 
            className="w-full bg-black border border-white/10 p-3 mb-6 text-white outline-none focus:border-[#c8a46e]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-[#c8a46e] text-black font-bold py-3 hover:bg-[#b08d5a] transition-all">ВОЙТИ</button>
        </form>
      </div>
    );
  }

  // ЭКРАН АДМИНКИ (основной контент)
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-20">
       <div className="max-w-4xl mx-auto">
         <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
           <h1 className="text-2xl font-serif uppercase">Admin Panel</h1>
           <button onClick={handleLogout} className="text-xs text-red-500 hover:text-red-400 uppercase tracking-widest">Выйти</button>
         </header>

         {/* Сюда вставь форму и список услуг из предыдущего кода */}
         <div className="bg-[#111] border border-white/5 p-8 mb-12">
            <h2 className="text-[#c8a46e] uppercase text-sm mb-6 flex items-center gap-2">
              {editId ? <><FaEdit /> Edit Service</> : <><FaPlus /> Add New Service</>}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <input
                 type="text" placeholder="Service Name" value={formData.service}
                 onChange={(e) => setFormData({...formData, service: e.target.value})}
                 className="bg-black border border-white/10 p-3 text-white focus:border-[#c8a46e] outline-none"
               />
               <input
                 type="number" placeholder="Price" value={formData.price}
                 onChange={(e) => setFormData({...formData, price: e.target.value})}
                 className="bg-black border border-white/10 p-3 text-white focus:border-[#c8a46e] outline-none"
               />
               <textarea
                 placeholder="Description" value={formData.description}
                 onChange={(e) => setFormData({...formData, description: e.target.value})}
                 className="md:col-span-2 bg-black border border-white/10 p-3 text-white focus:border-[#c8a46e] outline-none h-24"
               />
               <button type="submit" className="md:col-span-2 bg-[#c8a46e] text-black font-bold py-4 hover:bg-[#b08d5a]">
                 {editId ? "UPDATE" : "ADD SERVICE"}
               </button>
            </form>
         </div>

         <div className="space-y-4">
           {services.map((s) => (
             <div key={s.id} className="bg-[#111] border border-white/5 p-6 flex justify-between items-center">
               <div>
                 <h3 className="font-bold uppercase text-sm">{s.service} — <span className="text-[#c8a46e]">€{s.price}</span></h3>
                 <p className="text-xs text-neutral-500 mt-1">{s.description}</p>
               </div>
               <div className="flex gap-4">
                 <button onClick={() => {setEditId(s.id); setFormData({service: s.service, description: s.description, price: s.price.toString()})}} className="text-neutral-500 hover:text-white"><FaEdit /></button>
                 <button onClick={() => handleDelete(s.id)} className="text-neutral-500 hover:text-red-500"><FaTrash /></button>
               </div>
             </div>
           ))}
         </div>
       </div>
    </div>
  );
}