import Head from 'next/head';
import BannerSeven from '../../components/banners/BannerSeven';
import Layout from '../../components/layouts/Layout';
import PortfolioOne from '../../components/portfolio/PortfolioOne';

const Portfolio = () => {
    return (
        <Layout>
            <Head>
                <title>
                    Портфолио || keystroke Creative Agency Bootstrap5 Template
                </title>
            </Head>

            <main className="page-wrapper">
                <BannerSeven
                    title="Портфолио"
                    subtitle="От двух дизайнеров получаются разноцветные котосайты. Выбирай питомца."
                />

                <PortfolioOne bgColor="bg-transparent"/>
            </main>
        </Layout>
    );
};

export default Portfolio;
