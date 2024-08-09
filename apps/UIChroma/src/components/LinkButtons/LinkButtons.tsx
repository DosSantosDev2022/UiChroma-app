import Link from 'next/link';
import { Button } from '@repo/ui/components/button.tsx';
import { CMSIcon } from '../cms/cmsIcon';

interface LinksProps {
  link:{
    id: string
    label : string
    icon: string
    url:string
  }[]
}

export function LinkButtons({link}:LinksProps) {
  return (
    <div className='flex flex-wrap gap-3 mt-6 w-full'>
      {link.map((link) => (
        <Button
          variant='Shine'
          key={link.id}
          className='cursor-pointer w-32 px-3 py-3.5 h-10 flex items-center 
          justify-center gap-2 rounded-lg bg-primary-950 text-secondary-50'
        >
          <CMSIcon icon={link.icon} />
          <Link 
          aria-label='link to documentations' 
          target='_blank' 
          href={link.url}>
            {link.label}
          </Link>
        </Button>
      ))}
    </div>
  );
};


