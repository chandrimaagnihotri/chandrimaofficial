import React from "react";
import Article from "./articles";
import NewsPaperPhoto from "./newspaperPhoto";
import { css } from "@emotion/core";

const NewsArticles = () => {
    let articlesUrl = {
        article1: {
            url:
                "https://www.indulgexpress.com/fashion/designers/2020/jan/24/fashion-speciallakme-gen-next-designer-chandrima-agnihotri-debuts-with-a-stunning-glocal-edit-21677.html",
            header: "Indulge Express",
            description:
                "Lakme Gen Next designer Chandrima Agnihotri debuts with a stunning glocal edit",
        },
        article2: {
            url:
                "https://www.indulgexpress.com/fashion/designers/2020/jan/24/heres-a-look-at-what-the-lakmeacute-fashion-weeks-gen-next-designers-have-in-store-for-their-runwa-21704.html",
            header: "Indulge Express",
            description:
                "Here's a look at what the Lakmé Fashion Week’s Gen Next designers have in store for their runway debut",
        },
        article3: {
            url:
                "https://www.vogue.in/fashion/content/meet-gen-next-designers-at-lakme-fashion-week-summer-resort-2020-graine-chandrima-akhl-all2defy",
            header: "Vogue India",
            description:
                "Meet the new crop of Gen Next designers debuting at Lakmé Fashion Week 2020",
        },
        article4: {
            url:
                "https://www.thehindu.com/life-and-style/fashion/meet-the-gen-next-2020-designers/article30684481.ece",
            header: "The Hindu",
            description: "Meet the Gen Next 2020 designers",
        },
        article5: {
            url:
                "https://www.idiva.com/fashion/trends/lakme-gennext-designers-are-putting-millennials-back-on-the-fashion-map/18005560",
            header: "iDiva.com",
            description:
                "Lakmé GenNext Designers Are Putting Millennials Back On The Fashion Map",
        },
    };
    return (
        <div
            css={css`
                display: flex;
                flex-flow: column nowrap;

                @media screen and (min-width: 992px) {
                    flex-flow: row;
                }
            `}
        >
            <NewsPaperPhoto />
            <section
                css={css`
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    align-items: center;
                    margin: 0 1rem;

                    @media screen and (min-width: 992px) {
                        margin: 0 2rem;
                    }
                `}
            >
                <h2
                    css={css`
                        text-transform: uppercase;
                        letter-spacing: 0.1rem;
                        font-size: 1.25rem;
                        font-weight: 700;
                        align-self: flex-start;


                        @media screen and (min-width: 992px) {
                            font-size: 1.5rem;
                        }
                    `}
                >
                    Press
                </h2>
                <Article
                    header={articlesUrl.article1.header}
                    url={articlesUrl.article1.url}
                    description={articlesUrl.article1.description}
                />
                <Article
                    header={articlesUrl.article2.header}
                    url={articlesUrl.article2.url}
                    description={articlesUrl.article2.description}
                />
                <Article
                    header={articlesUrl.article3.header}
                    url={articlesUrl.article3.url}
                    description={articlesUrl.article3.description}
                />
                <Article
                    header={articlesUrl.article4.header}
                    url={articlesUrl.article4.url}
                    description={articlesUrl.article4.description}
                />
                <Article
                    header={articlesUrl.article5.header}
                    url={articlesUrl.article5.url}
                    description={articlesUrl.article5.description}
                />
            </section>
        </div>
    );
};

export default NewsArticles;
