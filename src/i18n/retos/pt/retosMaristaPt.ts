import { RetoTraduccion } from '../types';

/** Traducciones al portugués de Portugal (pt-PT) de los retos de historia marista. GENERADO por scripts/generar-retos.ts. */
export const RETOS_MARISTA_PT: Record<string, RetoTraduccion> = {
  "001-HM": {
    "nombre": "O mestre de Marlhes",
    "categoria": "Infância e escola",
    "fuenteHistorica": "Marlhes · Lanfrey T. 1, cap. 1; Tras las huellas, §3-5",
    "textoClave": "Marcelino nasceu em Marlhes a 20 de maio de 1789 e foi tarde para a escola, onde esteve pouco tempo.",
    "contextoHistorico": "Marlhes era uma vila rural onde a maioria dos adultos e jovens mal sabia ler. Os mestres eram pouco competentes e por vezes maltratavam os alunos. Anos depois, Marcelino esforçar-se-á por criar um clima de bom trato com as crianças.",
    "solucionExplicacion": "O responsável por Marcelino ter deixado a escola foi o mestre Barthélemy Moine, que juntava permissividade e brutalidade com o método individual. Marcelino aprendeu o suficiente para conhecer bem o catecismo antes da primeira comunhão e depois voltou ao trabalho da quinta.",
    "storyIntro": "Marlhes, finais do século XVIII. Um menino esperto mas sensível deixa de ir à escola e em casa ninguém sabe bem porquê. Ajuda a reconstruir onde estava cada um para descobrir quem lhe tornou a vida difícil na sala de aula.",
    "epilogue": "Caso resolvido! Moine ficou apontado: a brutalidade da sala de aula afastou Marcelino da escola. Aquela experiência dolorosa e o regresso à quinta forjaram o futuro educador de crianças.",
    "subtitle": "Infância e escola · Marlhes · 5x5",
    "badge": "O MESTRE DE MARLHES · 5x5",
    "rooms": {
      "escuela_moine": {
        "name": "Escola do mestre Moine",
        "shortName": "Escola Moine",
        "description": "Sala onde o mestre ensinava com o método individual."
      },
      "casa_champagnat": {
        "name": "Casa dos Champagnat",
        "shortName": "Casa Champagnat",
        "description": "Lar de uma família rural mais instruída do que a média."
      },
      "iglesia_marlhes": {
        "name": "Igreja de Marlhes",
        "shortName": "Igreja Marlhes",
        "description": "Templo onde Marcelino se preparou para a primeira comunhão."
      },
      "molino": {
        "name": "Moinho hidráulico",
        "shortName": "Moinho",
        "description": "Pequeno moinho explorado pelo pai de Marcelino."
      },
      "granja": {
        "name": "Quinta familiar",
        "shortName": "Quinta",
        "description": "Terras e estábulo onde Marcelino trabalhou em jovem."
      }
    },
    "blockedObjects": {
      "0,1": {
        "name": "Catecismo",
        "description": "Livro com que aprendeu a doutrina antes da primeira comunhão."
      },
      "0,4": {
        "name": "Cordeiros",
        "description": "Animais que Marcelino criava e vendia em adolescente."
      },
      "2,0": {
        "name": "Roda do moinho",
        "description": "Mecanismo do pequeno moinho familiar."
      }
    },
    "suspects": {
      "MC": {
        "name": "Marcelino Champagnat",
        "role": "Menino de Marlhes",
        "clueText": "Aprendeu o catecismo e a ler, mas recusou continuar na sala depois da primeira comunhão."
      },
      "BM": {
        "name": "Barthélemy Moine",
        "role": "Mestre da vila",
        "clueText": "Ensinava cada aluno em separado e combinava a desordem com as pancadas."
      },
      "JB": {
        "name": "Jean-Baptiste Champagnat",
        "role": "Pai e proprietário",
        "clueText": "Sabia escrever bem, foi secretário do município e mantinha em funcionamento o seu pequeno negócio."
      },
      "MT": {
        "name": "Marie-Thérèse Chirat",
        "role": "Mãe de família",
        "clueText": "Ensinou-o a rezar e despertou nele a devoção a Maria."
      },
      "LO": {
        "name": "Tia Louise",
        "role": "Antiga religiosa",
        "clueText": "Expulsa do seu convento pela Revolução, foi acolhida pelo irmão e foi guia na fé do menino."
      }
    },
    "clues": {
      "c1": {
        "text": "Marcelino nasceu em 1789, em plena Revolução Francesa, numa família rural com mais instrução do que a média."
      },
      "c2": {
        "text": "O mestre praticava o método individual: cada aluno em separado e sem ordem."
      },
      "c3": {
        "text": "Ainda assim, Marcelino aprendeu o catecismo e a ler antes da sua primeira comunhão."
      },
      "c4": {
        "text": "Depois de deixar a escola, o adolescente voltou a ajudar no trabalho familiar do campo."
      }
    }
  }
};
