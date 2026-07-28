import type { CampsiteConfig } from "../types";

/**
 * Strandcamping Oitner · Obertrum am See (Salzburger Seenland)
 * Quelle: leads/oitner-urlaubamsee/raw/digest. 100 % quellbasiert, Du-Anrede.
 * Bilder: nur provenienz-gesicherte Aufnahmen DIESES Platzes (je einmalig).
 */
const IMG = "/campsites/oitner-urlaubamsee";

const oitner: CampsiteConfig = {
  name: "Strandcamping Oitner",
  shortName: "Oitner",
  slug: "oitner-urlaubamsee",
  ort: "Obertrum am See",
  region: "Salzburger Seenland",
  brandKind: "Strandcamping am See",
  see: "Obertrumer See",
  regionLong: "Salzburger Seenland · Obertrum am See · Österreich",

  heroVariant: "center",

  claim: "Klein, ruhig und direkt am Obertrumer See",
  claimEmphasis: "am Obertrumer See",
  intro:
    "Mitten im Salzburger Seenland, direkt am Obertrumer See: rund 25 Plätze nah am Wasser, ein Seestüberl mit Sonnenterrasse und eine Familie, die hier in dritter Generation Gäste empfängt.",

  statement: {
    text: "Bei uns liegen nur ein paar Schritte zwischen deinem Stellplatz und dem Seeufer.",
    emphasis: "ein paar Schritte",
  },

  pillars: [
    {
      title: "Direkt am Obertrumer See",
      text: "Der kleine Platz liegt in der ruhigen Staffl-Bucht am Ufer des Obertrumer Sees — eingebettet ins Salzburger Seenland.",
      image: { src: `${IMG}/award-355102fccd.png`, alt: "Luftaufnahme der Staffl-Bucht am Obertrumer See mit dem Strandcamping Oitner" },
    },
    {
      title: "Stellplätze in erster Reihe",
      text: "Rund 25 Plätze für Wohnmobil, Wohnwagen und Zelt liegen nah am Wasser, dazu etwa 30 Dauerstellplätze auf dem gepflegten Areal.",
      image: { src: `${IMG}/award-891d2790bb.png`, alt: "Stellplätze mit Wohnwagen am Ufer des Obertrumer Sees" },
    },
  ],

  usps: [
    "Direkt am Obertrumer See",
    "Eigener Badestrand & Steg",
    "Seestüberl mit Terrasse",
    "Öffi-Ticket inklusive",
    "Kostenloses WLAN",
    "Familiär seit 3 Generationen",
  ],

  trust: {
    heading: "Seit rund 70 Jahren am selben Ufer",
    headingEmphasis: "70 Jahren",
    intro:
      "Aus ein paar Zimmern am früheren Bauernhof wurden über drei Generationen ein kleiner Strandcampingplatz, das Seestüberl und drei Ferienwohnungen — alles in ruhiger Seelage, persönlich geführt von Familie Oitner.",
  },

  awards: [
    {
      label: "Booking.com Traveller Review Award 2024 — 9 von 10 Punkten (Ferienwohnungen am See)",
      image: { src: `${IMG}/award-92da82b0dc.png`, alt: "Booking.com Traveller Review Award 2024, 9 von 10 Punkten – vergeben an Ferienwohnungen am See" },
    },
  ],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/activity-f293371b3d.webp`, alt: "Strandcamping Oitner direkt am Obertrumer See, von oben gesehen" },
  },

  camping: {
    heading: "Camping am Obertrumer See",
    intro:
      "Ein kleiner, gepflegter Platz mit ruhiger und familiärer Atmosphäre — kurze Wege zum Wasser, zum Seestüberl und mitten hinein ins Salzburger Seenland. Geöffnet von Mai bis September.",
    features: [
      {
        title: "Kinderspielplatz am Platz",
        text: "Rutsche und Platz zum Toben liegen mitten im Grünen zwischen den Stellplätzen — und das flache Seeufer ist gleich nebenan.",
        image: { src: `${IMG}/award-073ecea06f.png`, alt: "Kinderspielplatz mit Rutsche am Strandcamping Oitner" },
      },
    ],
  },

  anreise: {
    heading: "Anreise nach Obertrum",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A1 bei Salzburg Nord Richtung Trumer Seengebiet abfahren und über Elixhausen nach Obertrum — der Platz liegt an der Obertrumer Landesstraße (L 102) direkt am See.",
      },
      {
        title: "Mit Bus & Bahn",
        text: "Die Buslinie 121 ab Salzburg hält an der Station „Obertrum Staffl Seebad“ direkt vor der Einfahrt; Knotenpunkt für die Bahn ist der Hauptbahnhof Salzburg.",
      },
      {
        title: "Öffi-Ticket inklusive",
        text: "Während deines Aufenthalts bekommst du ein Ticket für alle öffentlichen Verkehrsmittel im ganzen Bundesland Salzburg.",
      },
    ],
  },

  galerie: {
    heading: "Sommer in der Staffl-Bucht",
    headingEmphasis: "Staffl-Bucht",
    intro: "Ruhiges Wasser, grüne Hügel und ein Platz, der seit Jahrzehnten zur Familie gehört.",
    tag: "Mai bis September",
    images: [
      { src: `${IMG}/award-6280164231.png`, alt: "Stellplätze am Seeufer mit Steg und Spielbereich" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am See",
    headingEmphasis: "am See",
    intro:
      "Sag uns Zeitraum und Personenzahl — Familie Oitner meldet sich persönlich. Anfragen für den Campingplatz am besten vormittags telefonisch (Mai bis September).",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz-Richtpreis für 2 Erwachsene inkl. Strom, Ortstaxe & Öffi-Ticket für ganz Salzburg — Nebensaison Mai/Juni/September, Hauptsaison Juli/August. Ferienwohnung 110–160 € je nach Saison & Belegung.",
    highlight: {
      title: "Öffi-Ticket inklusive",
      text: "Im Richtpreis enthalten: freie Fahrt mit allen Öffis in ganz Salzburg.",
    },
    categories: [
      { id: "stellplatz-neben", label: "Stellplatz · Nebensaison", perNight: 35, perExtraGuest: 7 },
      { id: "stellplatz-haupt", label: "Stellplatz · Hauptsaison", perNight: 47, perExtraGuest: 10 },
      { id: "ferienwohnung", label: "Ferienwohnung am See", perNight: 110 },
    ],
  },

  kontakt: {
    coords: { lat: 47.942366, lng: 13.069151 },
    tel: "+43 6219 6442",
    telHref: "tel:+4362196442",
    mail: "info@oitner-urlaubamsee.at",
    adresse: "Seestraße 18 · 5162 Obertrum am See · Salzburg",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Preise", href: "#booking" },
    { label: "Anreise", href: "#anreise" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default oitner;
