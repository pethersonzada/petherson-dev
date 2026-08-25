'use client';

import { useState, useEffect } from 'react';
import styles from '../page.module.css';

export default function Terminal({ comandos = ['whoami'] }) {
  const [textoAtual, setTextoAtual] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [textoAtual, isDeleting, delta, comandos, loopNum]);

  const tick = () => {
    let i = loopNum % comandos.length;
    let fullText = comandos[i];

    let updatedText = isDeleting 
      ? fullText.substring(0, textoAtual.length - 1) 
      : fullText.substring(0, textoAtual.length + 1);

    setTextoAtual(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1500); 

    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(800); 
      
    } else if (isDeleting) {
      setDelta(50);
    } else {
      setDelta(100);
    }
  };

  return (
    <span className={styles.prompt}>
      ~/petherson $ {textoAtual}
      <span className={styles.cursor}></span>
    </span>
  );
}