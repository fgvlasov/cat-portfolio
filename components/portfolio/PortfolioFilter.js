import {useEffect} from "react";

const PortfolioFilter = (
    {
        portfolio,
        setFilterdPortfolioData,
        activeGenre,
        setActiveGenre,
    }
) => {
    useEffect(() => {
        if (activeGenre === 0) {
            setFilterdPortfolioData(portfolio);
            return;
        }

        const filtered = portfolio.filter((item) =>
            item.categoryIds.includes(activeGenre)
        );

        setFilterdPortfolioData(filtered)
    }, [activeGenre, portfolio, setFilterdPortfolioData]);

    return (
        <div className="messonry-button text-start text-lg-end">
            <button onClick={() => setActiveGenre(0)} className={activeGenre === 0 ? "is-checked" : ""}>
                <span className="filter-text">Все</span>
            </button>
            <button onClick={() => setActiveGenre(1)} className={activeGenre === 1 ? "is-checked" : ""}>
                <span className="filter-text">Сайты</span>
            </button>
            <button onClick={() => setActiveGenre(2)} className={activeGenre === 2 ? "is-checked" : ""}>
                <span className="filter-text">Логотипы</span>
            </button>
            <button onClick={() => setActiveGenre(3)} className={activeGenre === 3 ? "is-checked" : ""}>
                <span className="filter-text">Графика</span>
            </button>
        </div>
    );
};

export default PortfolioFilter;
