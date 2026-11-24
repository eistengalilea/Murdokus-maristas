import { RetoTraduccion } from './types';

/** Traducciones al gallego de los retos de historia marista. GENERADO por scripts/generar-retos.ts. */
export const RETOS_MARISTA_GL: Record<string, RetoTraduccion> = {
  "001-HM": {
    "nombre": "O mestre de Marlhes",
    "categoria": "Infancia e escola",
    "fuenteHistorica": "Marlhes · Lanfrey T. 1, cap. 1; Tras las huellas, §3-5",
    "textoClave": "Marcelino naceu en Marlhes o 20 de maio de 1789 e foi tarde á escola, onde estivo pouco tempo.",
    "contextoHistorico": "Marlhes era unha vila rural onde a maioría de adultos e mozos apenas sabían ler. Os mestres eran pouco competentes e ás veces maltrataban o alumnado. Anos despois, Marcelino esforzarase por crear un clima de bo trato cos nenos.",
    "solucionExplicacion": "O responsable de que Marcelino deixase a escola foi o mestre Barthélemy Moine, que xuntaba permisividade e brutalidade co método individual. Marcelino aprendeu o suficiente para coñecer ben o catecismo antes da primeira comuñón e despois volveu ao traballo da granxa.",
    "storyIntro": "Marlhes, finais do século XVIII. Un neno esperto pero sensible deixa de ir á escola e na casa ninguén sabe ben por que. Axuda a reconstruír onde estaba cada quen para descubrir quen llo puxo difícil na aula.",
    "epilogue": "Caso resolto! Moine quedou sinalado: a brutalidade da aula afastou Marcelino da escola. Aquela experiencia dolorosa e a súa volta á granxa forxaron o futuro educador de nenos.",
    "subtitle": "Infancia e escola · Marlhes · 5x5",
    "badge": "O MESTRE DE MARLHES · 5x5",
    "rooms": {
      "escuela_moine": {
        "name": "Escola do mestre Moine",
        "shortName": "Escola Moine",
        "description": "Aula onde o mestre ensinaba co método individual."
      },
      "casa_champagnat": {
        "name": "Casa dos Champagnat",
        "shortName": "Casa Champagnat",
        "description": "Fogar dunha familia rural máis instruída ca a media."
      },
      "iglesia_marlhes": {
        "name": "Igrexa de Marlhes",
        "shortName": "Igrexa Marlhes",
        "description": "Templo onde Marcelino se preparou para a primeira comuñón."
      },
      "molino": {
        "name": "Muíño hidráulico",
        "shortName": "Muíño",
        "description": "Pequeno muíño que explotaba o pai de Marcelino."
      },
      "granja": {
        "name": "Granxa familiar",
        "shortName": "Granxa",
        "description": "Terras e establo onde Marcelino traballou de novo."
      }
    },
    "blockedObjects": {
      "0,1": {
        "name": "Catecismo",
        "description": "Libro co que aprendeu a doutrina antes da primeira comuñón."
      },
      "0,4": {
        "name": "Años",
        "description": "Animais que Marcelino criaba e vendía de adolescente."
      },
      "2,0": {
        "name": "Roda do muíño",
        "description": "Mecanismo do pequeno muíño familiar."
      }
    },
    "suspects": {
      "MC": {
        "name": "Marcelino Champagnat",
        "role": "Neno de Marlhes",
        "clueText": "Aprendeu o catecismo e a ler, pero rexeitou seguir na aula tras a primeira comuñón."
      },
      "BM": {
        "name": "Barthélemy Moine",
        "role": "Mestre da vila",
        "clueText": "Ensinaba cada alumno por separado e combinaba a desorde cos golpes."
      },
      "JB": {
        "name": "Jean-Baptiste Champagnat",
        "role": "Pai e propietario",
        "clueText": "Sabía escribir ben, foi secretario do concello e mantiña en marcha o seu pequeno negocio."
      },
      "MT": {
        "name": "Marie-Thérèse Chirat",
        "role": "Nai de familia",
        "clueText": "Ensinoulle a rezar e espertou nel a devoción a María."
      },
      "LO": {
        "name": "Tía Louise",
        "role": "Antiga relixiosa",
        "clueText": "Expulsada do seu convento pola Revolución, acolleuna o seu irmán e foi guía na fe do neno."
      }
    },
    "clues": {
      "c1": {
        "text": "Marcelino naceu en 1789, en plena Revolución Francesa, nunha familia rural con máis instrución ca a media."
      },
      "c2": {
        "text": "O mestre practicaba o método individual: cada alumno por separado e sen orde."
      },
      "c3": {
        "text": "Aínda así, Marcelino aprendeu o catecismo e a ler antes da súa primeira comuñón."
      },
      "c4": {
        "text": "Tras deixar a escola, o adolescente volveu axudar no traballo familiar do campo."
      }
    }
  }
};
