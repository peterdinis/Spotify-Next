import Head from "next/head";

interface ISeoProps {
    title: string;
}

const Seo: React.FC<ISeoProps> = ({title}: ISeoProps) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}

export default Seo;