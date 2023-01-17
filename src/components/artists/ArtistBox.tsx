import Link from "next/link";

interface IArtistBoxProps {
    title: string;
    see: any;
}

const ArtistBox: React.FC<IArtistBoxProps> = ({title, see = false}: IArtistBoxProps) => {
    return (
        <>
        <section>
          <header className='flex justify-between'>
            <h3 className='text-2xl text-white font-bold hover:underline tracking-tight'>{title}</h3>
            {see && (
                <Link className={'text-link text-[12px] font-semibold tracking-widest bottom-0'} href={see}>
                    Artist
                </Link>
            )}
          </header>
 
      </section>
        </>
    )
}

export default ArtistBox;