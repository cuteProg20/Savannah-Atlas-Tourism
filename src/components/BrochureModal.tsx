import React, { useState } from 'react';
import { X, BookOpen, Download, Mail, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface BrochureModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  currentLang,
  onClose,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  const handleDirectDownload = () => {
    const blob = new Blob([
      `TOURWEB TANZANIA SAFARI & KILIMANJARO GUIDE\nLanguage: ${currentLang.toUpperCase()}\n\nIncludes:\n- Northern Circuit Safari Expeditions (Serengeti Great Migration, Ngorongoro Crater, Tarangire Baobabs)\n- Mount Kilimanjaro Trekking Guide (Lemosho 8-Day, Machame 7-Day with KPAP Crew)\n- Zanzibar Beach & Spice Escapes (Nungwi, Kendwa, Stone Town)\n- Wild Southern Parks (Ruaha & Nyerere Boat Safaris)\n- Cultural Hadzabe Bushmen & Maasai Encounters\n\nOfficial TATO Member #8492 | TTB Licensed | KPAP Partner\nArusha Safari Desk WhatsApp: +255 784 920 114\nEmail: safari@tourweb.travelm`
    ], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TourWeb_Tanzania_Safari_Guide_${currentLang}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white text-slate-900 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative">
        <div className="bg-white text-slate-900 px-6 py-5 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#1E3A8A]" />
            <h3 className="font-serif font-bold text-lg text-[#1E3A8A]">
              {t.brochureTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex gap-4 items-center bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <div className="w-16 h-20 bg-blue-50 text-[#1E3A8A] rounded-lg shrink-0 flex flex-col items-center justify-center border border-blue-200 shadow-xs">
              <FileText className="w-6 h-6 mb-1 text-[#2563EB]" />
              <span className="text-[9px] font-black uppercase tracking-wider text-[#1E3A8A]">PDF GUIDE</span>
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900">
                {currentLang === 'ru' ? 'Каталог сафари и Килиманджаро TourWeb (Русский/English)' : 'TourWeb Tanzania 2027 Safari & Kili Guide (84 Pages)'}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.brochureSubtitle}
              </p>
            </div>
          </div>

          {sent ? (
            <div className="text-center py-4 space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <div className="font-bold text-sm text-slate-900">
                {currentLang === 'ru' ? 'Каталог успешно отправлен на вашу почту!' : 'Guide sent to your email!'}
              </div>
              <p className="text-xs text-slate-500">
                {email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSend} className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                {currentLang === 'ru' ? 'Получить брошюру на e-mail:' : 'Email me the digital brochure:'}
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="safari-traveler@example.com"
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1E3A8A] focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors"
                >
                  {t.brochureEmailBrochure}
                </button>
              </div>
            </form>
          )}

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              {currentLang === 'ru' ? 'Или скачайте прямо сейчас:' : 'Or download directly:'}
            </span>
            <button
              onClick={handleDirectDownload}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#1E3A8A] font-bold text-xs rounded-xl border border-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{t.brochureDownloadPdf}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
