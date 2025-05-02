import { IconBrandLinkedin, IconBrandGithub, IconPhone, IconMail } from '@tabler/icons-react';      

const SocialLinks = [
    {
        id: 1,
        title: 'Github',
        href: 'https://github.com/A3xxx23/',
        icon: IconBrandGithub,
    },
    {
        id: 2,
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/angel-emilio-aquino/',
        icon: IconBrandLinkedin,
    },
    {
        id: 3,
        title: 'Cellphone',
        href: 'https://wa.me/18094038309',
        icon: IconPhone,
    },
    {
        id: 4,
        title: 'Gmail',
        href: 'mailto:angelemilioaquino6@gmail.com',
        icon: IconMail,
    },
];

export const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-center -mt-0 sm:mt-0 gap-3">
        {SocialLinks.map((link) => (
            <a 
                key={link.id} 
                href={link.href} 
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-500 flex items-center justify-center rounded-full transition-all"
            >
                <link.icon className="w-7 h-7" />
            </a>
        ))}
      </div>
    </footer>
  );
};
