import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Step = 'INVITE' | 'NO_REJECT_1' | 'NO_REJECT_2' | 'NO_REJECT_3' | 'SUCCESS' | 'DATE_PICKER' | 'FOOD_SELECT' | 'ACTIVITY_SELECT' | 'FINAL';

const FOOD_OPTIONS = [
  { id: 'burger', label: 'Hambúrguer', icon: '🍔' },
  { id: 'sushi', label: 'Sushi', icon: '🍣' },
  { id: 'pasta', label: 'Massas', icon: '🍝' },
  { id: 'tacos', label: 'Tacos', icon: '🌮' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
  { id: 'other', label: 'Outro', icon: '😋' },
];

const ACTIVITY_OPTIONS = [
  { id: 'golf', label: 'Golfe', icon: '⛳' },
  { id: 'walk', label: 'Caminhada', icon: '🚶' },
  { id: 'movies', label: 'Cinema', icon: '🍿' },
  { id: 'dance', label: 'Dança', icon: '💃' },
  { id: 'park', label: 'Parque', icon: '🌳' },
  { id: 'beach', label: 'Praia', icon: '🏖️' },
];

export default function DateInviteChallenge() {
  const [step, setStep] = useState<Step>('INVITE');
  const [selectedFood, setSelectedFood] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');

  const handleNoClick = () => {
    if (step === 'INVITE') setStep('NO_REJECT_1');
    else if (step === 'NO_REJECT_1') setStep('NO_REJECT_2');
    else if (step === 'NO_REJECT_2') setStep('NO_REJECT_3');
  };

  const getNoButtonText = () => {
    if (step === 'NO_REJECT_1') return 'TEM CERTEZA?';
    if (step === 'NO_REJECT_2') return 'PENSA BEM...';
    if (step === 'NO_REJECT_3') return 'POR FAVOR!!';
    return 'NÃO';
  };

  const renderContent = () => {
    switch (step) {
      case 'INVITE':
      case 'NO_REJECT_1':
      case 'NO_REJECT_2':
      case 'NO_REJECT_3':
        return (
          <motion.div
            key="invite"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center w-full h-full p-6 space-y-6"
          >
            {step !== 'INVITE' && (
              <motion.button
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute top-12 bg-[#E24A3A] text-white font-bold tracking-wide uppercase px-6 py-3 rounded-full shadow-lg z-10 border border-white/20"
                onClick={handleNoClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {getNoButtonText()}
              </motion.button>
            )}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-8xl filter drop-shadow-xl mb-4"
            >
              {step === 'INVITE' ? '😎' : '🥺'}
            </motion.div>

            <div className="bg-[#2B1B17] w-full p-8 rounded-2xl shadow-xl flex flex-col items-center">
              <h1 className="text-white font-bold tracking-wide uppercase text-xl text-center mb-8 leading-relaxed">
                VOCÊ ACEITARIA IR À UM DATE COMIGO?
              </h1>
              
              <div className="flex flex-col w-full space-y-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setStep('SUCCESS')}
                  className="w-full bg-[#E24A3A] text-white font-bold tracking-wide uppercase py-4 rounded-xl shadow-md text-lg"
                >
                  SIM
                </motion.button>
                
                <AnimatePresence>
                  {step === 'INVITE' && (
                    <motion.button
                      initial={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0, marginTop: 0, overflow: 'hidden' }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleNoClick}
                      className="w-full bg-[#8A241A] text-white font-bold tracking-wide uppercase py-4 rounded-xl shadow-md text-lg"
                    >
                      NÃO
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        );

      case 'SUCCESS':
        return (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center w-full h-full p-6 space-y-6"
          >
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="text-8xl filter drop-shadow-xl mb-4 flex justify-center gap-2"
            >
              <span>😎</span><span>🌹</span>
            </motion.div>

            <div className="bg-[#2B1B17] w-full p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
              <h2 className="text-white font-bold tracking-wide uppercase text-xl mb-4">
                VOCÊ DISSE SIM? 😉
              </h2>
              <p className="text-white/80 font-medium mb-8">
                Eu estava esperando você dizer não kkkk
              </p>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setStep('DATE_PICKER')}
                className="w-full bg-[#E24A3A] text-white font-bold tracking-wide uppercase py-4 rounded-xl shadow-md text-lg"
              >
                PRÓXIMO 💙
              </motion.button>
            </div>
          </motion.div>
        );

      case 'DATE_PICKER':
        return (
          <motion.div
            key="date"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center w-full h-full p-6 space-y-6"
          >
            <div className="bg-[#2B1B17] w-full p-8 rounded-2xl shadow-xl flex flex-col items-center">
              <h2 className="text-white font-bold tracking-wide uppercase text-xl mb-8 text-center">
                Quando você tá livre? 📅
              </h2>
              
              <div className="w-full space-y-4 mb-8">
                <div>
                  <label className="text-white/80 text-sm font-bold uppercase mb-2 block">Escolhe a data</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#4A3229] text-white px-4 py-3 rounded-xl border-2 border-transparent focus:border-[#E24A3A] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-sm font-bold uppercase mb-2 block">Escolhe o horário</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#4A3229] text-white px-4 py-3 rounded-xl border-2 border-transparent focus:border-[#E24A3A] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <motion.button
                whileHover={date && time ? { scale: 1.03 } : {}}
                whileTap={date && time ? { scale: 0.97 } : {}}
                onClick={() => setStep('FOOD_SELECT')}
                disabled={!date || !time}
                className={`w-full font-bold tracking-wide uppercase py-4 rounded-xl shadow-md text-lg transition-colors ${
                  date && time ? 'bg-[#E24A3A] text-white' : 'bg-[#4A3229] text-white/50 cursor-not-allowed'
                }`}
              >
                SELECIONAR A DATA 💙
              </motion.button>
            </div>
          </motion.div>
        );

      case 'FOOD_SELECT':
        return (
          <motion.div
            key="food"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center w-full h-full p-6 space-y-6"
          >
            <div className="bg-[#2B1B17] w-full p-6 rounded-2xl shadow-xl flex flex-col items-center">
              <h2 className="text-white font-bold tracking-wide uppercase text-xl mb-6 text-center">
                O QUE TÁ AFIM? 🤔
              </h2>
              
              <div className="grid grid-cols-2 gap-4 w-full mb-8">
                {FOOD_OPTIONS.map((food) => (
                  <motion.button
                    key={food.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedFood(food.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-colors ${
                      selectedFood === food.id
                        ? 'border-[#E24A3A] bg-[#4A3229]'
                        : 'border-transparent bg-[#3A261F] hover:bg-[#4A3229]'
                    }`}
                  >
                    <span className="text-4xl mb-2">{food.icon}</span>
                    <span className="text-white font-bold text-sm tracking-wide uppercase text-center w-full">
                      {food.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <motion.button
                whileHover={selectedFood ? { scale: 1.03 } : {}}
                whileTap={selectedFood ? { scale: 0.97 } : {}}
                onClick={() => setStep('ACTIVITY_SELECT')}
                disabled={!selectedFood}
                className={`w-full font-bold tracking-wide uppercase py-4 rounded-xl shadow-md text-lg transition-colors ${
                  selectedFood ? 'bg-[#E24A3A] text-white' : 'bg-[#4A3229] text-white/50 cursor-not-allowed'
                }`}
              >
                {selectedFood ? 'BORA! 💙' : 'ESCOLHE PRIMEIRO 👆'}
              </motion.button>
            </div>
          </motion.div>
        );

      case 'ACTIVITY_SELECT':
        return (
          <motion.div
            key="activity"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center w-full h-full p-6 space-y-6"
          >
            <div className="bg-[#2B1B17] w-full p-6 rounded-2xl shadow-xl flex flex-col items-center">
              <h2 className="text-white font-bold tracking-wide uppercase text-xl mb-2 text-center">
                QUAL É A VIBE? ☀️
              </h2>
              <p className="text-white/80 font-medium mb-6 text-sm text-center">
                Escolhe a atividade ideal
              </p>
              
              <div className="grid grid-cols-2 gap-4 w-full mb-8">
                {ACTIVITY_OPTIONS.map((activity) => (
                  <motion.button
                    key={activity.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedActivity(activity.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-colors ${
                      selectedActivity === activity.id
                        ? 'border-[#E24A3A] bg-[#4A3229]'
                        : 'border-transparent bg-[#3A261F] hover:bg-[#4A3229]'
                    }`}
                  >
                    <span className="text-4xl mb-2">{activity.icon}</span>
                    <span className="text-white font-bold text-sm tracking-wide uppercase text-center w-full">
                      {activity.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <motion.button
                whileHover={selectedActivity ? { scale: 1.03 } : {}}
                whileTap={selectedActivity ? { scale: 0.97 } : {}}
                onClick={() => setStep('FINAL')}
                disabled={!selectedActivity}
                className={`w-full font-bold tracking-wide uppercase py-4 rounded-xl shadow-md text-lg transition-colors ${
                  selectedActivity ? 'bg-[#E24A3A] text-white' : 'bg-[#4A3229] text-white/50 cursor-not-allowed'
                }`}
              >
                {selectedActivity ? 'ISSO PARECE LEGAL! 😎' : 'ESCOLHE PRIMEIRO 👆'}
              </motion.button>
            </div>
          </motion.div>
        );

      case 'FINAL':
        const selectedFoodObj = FOOD_OPTIONS.find(f => f.id === selectedFood);
        const selectedActivityObj = ACTIVITY_OPTIONS.find(a => a.id === selectedActivity);
        
        // Format date YYYY-MM-DD to DD de Mês de YYYY
        const [year, month, day] = date.split('-');
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        const formattedDate = date ? `${day} de ${months[parseInt(month, 10) - 1]} de ${year}` : '';

        return (
          <motion.div
            key="final"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center w-full h-full p-6 space-y-6"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="text-8xl filter drop-shadow-xl mb-2 flex justify-center items-center relative"
            >
              <span className="relative z-10">🐧</span>
              <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-5xl z-20">😎</span>
              <span className="absolute bottom-0 left-0 transform -translate-x-4 text-6xl z-20">🌹</span>
            </motion.div>

            <div className="bg-[#2B1B17] w-full p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
              <h2 className="text-white font-bold tracking-wide uppercase text-xl mb-2">
                TÔ CONTIGO, GATINHA. 💙
              </h2>
              <p className="text-white/90 font-medium mb-6 text-sm">
                Fica pronta que eu vou te buscar 🚙
              </p>
              
              <div className="flex flex-col items-start w-full space-y-3 bg-[#3A261F] p-5 rounded-xl text-white/90 font-medium">
                <div className="flex items-center gap-3">
                  <span>🗓️</span> <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>⏰</span> <span>{time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>🍽️</span> <span>{selectedFoodObj?.icon} {selectedFoodObj?.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>✨</span> <span>{selectedActivityObj?.icon} {selectedActivityObj?.label}</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  );
}
