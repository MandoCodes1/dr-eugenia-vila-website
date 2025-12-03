import { getPermalink } from '../utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Sobre Mí',
      href: getPermalink('/sobre-mi'),
    },
    {
      text: 'Servicios',
      href: getPermalink('/servicios'),
    },
    {
      text: 'Reseñas',
      href: getPermalink('/resenas'),
    },
    {
      text: 'Galería',
      href: getPermalink('/galeria'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [
    {
      text: 'Reservar Cita',
      href: 'https://wa.me/34679975580?text=Hola,%20me%20gustaría%20reservar%20una%20cita',
      target: '_blank',
      icon: 'tabler:brand-whatsapp',
    },
  ],
};

export const headerDataEN = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/en'),
    },
    {
      text: 'About',
      href: getPermalink('/en/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/en/services'),
    },
    {
      text: 'Reviews',
      href: getPermalink('/en/reviews'),
    },
    {
      text: 'Gallery',
      href: getPermalink('/en/gallery'),
    },
    {
      text: 'Contact',
      href: getPermalink('/en/contact'),
    },
  ],
  actions: [
    {
      text: 'Book Appointment',
      href: 'https://wa.me/34679975580?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment',
      target: '_blank',
      icon: 'tabler:brand-whatsapp',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        {
          text: 'Implantes Dentales',
          href: getPermalink('/servicios#implantes'),
        },
        { text: 'Cirugía Oral', href: getPermalink('/servicios#cirugia') },
        { text: 'Alineadores', href: getPermalink('/servicios#alineadores') },
        {
          text: 'Odontología Estética',
          href: getPermalink('/servicios#estetica'),
        },
      ],
    },
    {
      title: 'Información',
      links: [
        { text: 'Sobre Mí', href: getPermalink('/sobre-mi') },
        { text: 'Reseñas', href: getPermalink('/resenas') },
        { text: 'Galería', href: getPermalink('/galeria') },
        { text: 'Contacto', href: getPermalink('/contacto') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'WhatsApp: +34 679975580', href: 'https://wa.me/34679975580' },
        {
          text: 'eugeniavila63@gmail.com',
          href: 'mailto:eugeniavila63@gmail.com',
        },
        { text: 'El Palo, Málaga, España', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'WhatsApp',
      icon: 'tabler:brand-whatsapp',
      href: 'https://wa.me/34679975580',
    },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <div class="text-sm text-center">
      <p>© ${new Date().getFullYear()} Dra. Eugenia Vila. Todos los derechos reservados. Clínica abierta fines de semana selectos.</p>
    </div>
  `,
};

export const footerDataEN = {
  links: [
    {
      title: 'Services',
      links: [
        {
          text: 'Dental Implants',
          href: getPermalink('/en/services#implants'),
        },
        { text: 'Oral Surgery', href: getPermalink('/en/services#surgery') },
        { text: 'Aligners', href: getPermalink('/en/services#aligners') },
        {
          text: 'Cosmetic Dentistry',
          href: getPermalink('/en/services#cosmetic'),
        },
      ],
    },
    {
      title: 'Information',
      links: [
        { text: 'About', href: getPermalink('/en/about') },
        { text: 'Reviews', href: getPermalink('/en/reviews') },
        { text: 'Gallery', href: getPermalink('/en/gallery') },
        { text: 'Contact', href: getPermalink('/en/contact') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'WhatsApp: +34 679975580', href: 'https://wa.me/34679975580' },
        {
          text: 'eugeniavila63@gmail.com',
          href: 'mailto:eugeniavila63@gmail.com',
        },
        { text: 'El Palo, Málaga, Spain', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/en/terms') },
    { text: 'Privacy Policy', href: getPermalink('/en/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'WhatsApp',
      icon: 'tabler:brand-whatsapp',
      href: 'https://wa.me/34679975580',
    },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <div class="text-sm text-center">
      <p>© ${new Date().getFullYear()} Dr. Eugenia Vila. All rights reserved. Clinic open select weekends.</p>
    </div>
  `,
};
