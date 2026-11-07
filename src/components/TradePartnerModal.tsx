import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  Download, 
  FileSpreadsheet, 
  Image as ImageIcon, 
  CheckCircle2, 
  Briefcase, 
  ArrowRight,
  Globe2,
  Mail
} from 'lucide-react';
import { Language } from '../types';

interface TradePartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const TradePartnerModal: React.FC<TradePartnerModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const isRu = currentLang === 'ru';
  const [agencyName, setAgencyName] = useState('');
  const [agentEmail, setAgentEmail] = useState('');
  const [iataOrReg, setIataOrReg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900">
        
        {/* Header */}
        <div className="bg-[#1B3B2B] text-white p-6 sm:p-8 flex items-start justify-between relative">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-emerald-900/60 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-700/50">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{isRu ? 'B2B Партнерский Портал' : 'B2B Travel Trade Portal'}</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              {isRu ? 'Вход для туроператоров и турагентств' : 'Travel Trade & Tour Operator Concierge'}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 font-light">
              {isRu
                ? 'Прямые нетто-тарифы, гарантированные квоты в лоджах Танзании и маркетинговые материалы в высоком разрешении.'
                : 'Direct confidential net rates, guaranteed lodge allotments in Serengeti & Zanzibar, and high-res media kits.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">
                    {isRu ? 'Название агентства / оператора' : 'Agency / Company Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={agencyName}
                    onChange={(e) => setAgencyName(e.target.value)}
                    placeholder="e.g., Silk Road Travel Co."
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1B3B2B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">
                    {isRu ? 'Рабочий E-mail' : 'Professional E-mail'}
                  </label>
                  <input
                    type="email"
                    required
                    value={agentEmail}
                    onChange={(e) => setAgentEmail(e.target.value)}
                    placeholder="partner@agency.com"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1B3B2B]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">
                  {isRu ? 'IATA / Номер лицензии / Сайт' : 'IATA / Registration No. / Website'}
                </label>
                <input
                  type="text"
                  value={iataOrReg}
                  onChange={(e) => setIataOrReg(e.target.value)}
                  placeholder="e.g., IATA #849201 or https://agency.com"
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1B3B2B]"
                />
              </div>

              {/* Trade Inclusions Highlights */}
              <div className="bg-[#FAF9F5] border border-[#E6E1D8] p-4 rounded-2xl space-y-2 text-xs text-slate-700">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{isRu ? 'Что получают партнеры TourWeb:' : 'Included Trade Partner Benefits:'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{isRu ? 'Тарифные сетки 2026/2027 в Excel' : '2026/2027 Net Confidential Rate Sheets'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{isRu ? 'Прямая комиссия до 18% для агентов' : 'Up to 18% direct agent commission'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{isRu ? 'White-label PDF программы для клиентов' : 'White-label PDF client proposal kits'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{isRu ? 'Персональный B2B менеджер 24/7' : 'Dedicated 24/7 B2B Account Director'}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  {isRu ? 'Отмена' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#1B3B2B] hover:bg-[#152e22] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isRu ? 'Запросить доступ к тарифам' : 'Request Trade Access'}</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-bold text-xl text-slate-900">
                {isRu ? 'Запрос успешно отправлен!' : 'Trade Application Received'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                {isRu
                  ? `Спасибо! Наш отдел работы с туроператорами в Аруше проверит данные агентства "${agencyName}" и вышлет конфиденциальные нетто-тарифы и логин на ${agentEmail} в течение 2 часов.`
                  : `Thank you! Our Arusha contracting desk will verify "${agencyName}" and email confidential net rate sheets to ${agentEmail} within 2 business hours.`}
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#1B3B2B] text-white font-bold text-xs rounded-xl shadow-xs"
              >
                {isRu ? 'Закрыть окно' : 'Close Portal'}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
