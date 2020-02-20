import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Look from "./collectionLook";
import { css } from "@emotion/core";

const CollectionLookBook = () => {
    const data = useStaticQuery(graphql`
        query {
            allLookbookJson {
                edges {
                    node {
                        description
                        price
                        image
                        id
                    }
                }
            }
        }
    `);

    const lookBookItems = data.allLookbookJson.edges;

    return (
        <>
            <h2
                css={css`
                    margin-left: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1rem;
                    font-size: 1rem;
                    font-weight: 700;
                    color: hsla(0, 0%, 10%, 1);
                    margin-bottom: 0.5em;

                    @media screen and (min-width: 576px) {
                        margin-left: 1.25rem;
                    }

                    @media screen and (min-width: 768px) {
                        margin-left: 1.5rem;
                    }

                    @media screen and (min-width: 992px) {
                        margin-left: 1.75rem;
                        font-size: 1.25rem;
                    }

                    @media screen and (min-width: 1200px) {
                        margin-left: 2rem;
                    }
                `}
            >
                Spring Summer Collection 2020
            </h2>
            <section
                css={css`
                    ${"" /* margin: 0.5rem 1rem; */}

                    ${"" /* @media screen and (min-width: 786px) {
                        width: calc(15% - 1rem);
                        margin: 1rem;
                        transition: 0.2s all ease-in;

                        &:hover {
                            cursor: pointer;
                            transform: scale(1.1, 1.1);
                            z-index: 2;
                        }
                    } */}
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    margin-bottom: 1em;
                    @media screen and (min-width: 786px) {
                        margin: 0 2rem 2rem;
                    }
                `}
            >
                {lookBookItems.map(item => (
                    <Look
                        photo={item.node.image}
                        description={item.node.description}
                        price={item.node.price}
                        key={item.node.id}
                    />
                ))}
            </section>
        </>
    );
};

export default CollectionLookBook;
