import React from "react";
import { css } from "@emotion/core";

const NewsArticles = () => {
    return (
        <div
            css={css`
                display: flex;
                flex-flow: column wrap;
                justify-content: space-around;
                align-items: center;
                margin-bottom: 3em;
            `}
        >
            <a href="https://www.indulgexpress.com/fashion/designers/2020/jan/24/fashion-speciallakme-gen-next-designer-chandrima-agnihotri-debuts-with-a-stunning-glocal-edit-21677.html"
            >ABCDEF</a>
            <a href="https://www.vogue.in/fashion/content/meet-gen-next-designers-at-lakme-fashion-week-summer-resort-2020-graine-chandrima-akhl-all2defy"
            >ABCDEF</a>
            <a href="https://www.thehindu.com/life-and-style/fashion/meet-the-gen-next-2020-designers/article30684481.ece"
            >ABCDEF</a>
            <a href="https://thehauterfly.com/fashion/lakme-fashion-wee-gen-next-designers-2020/"
            >ABCDEF</a>
        </div>
    );
};

export default NewsArticles;
