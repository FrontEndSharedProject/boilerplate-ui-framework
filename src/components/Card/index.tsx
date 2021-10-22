import React, { RefObject, useEffect, useRef } from "react";
import clsx from "clsx";
import "./style.scss";
import { handleCard } from "@UI";

interface Card {
  title: string;
  info: string;
  poster: string;
  tags: string[];
  showBtn?: boolean;
  index?: number;
}

export const CardData: Card[] = new Array(4)
  .fill("")
  .map((value, key): Card => {
    return {
      title: `标题${key}`,
      info: `描述${key}`,
      poster: `https://tailwindcss.com/img/card-top.jpg`,
      tags: [`Tag${key}`, `TAG-next${key}`],
    };
  });

export const Card = ({ title, info, poster, tags, showBtn, index }: Card) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 v-card">
      <img className="w-full" src={poster} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-100">{title}</div>
        <p className="text-gray-600 text-base">{info}</p>
        {showBtn && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            我是可以点击的 Button {index}
          </button>
        )}
      </div>
      <div className="px-6 py-4">
        {tags.map((tag) => {
          return (
            <span
              key={tag}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2"
            >
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export class CardList extends React.Component<
  { data: Card[]; id: string; handleJs: boolean },
  any
> {
  protected box: RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);

    this.box = React.createRef();
  }

  componentDidMount() {
    if (this.props.handleJs) {
      handleCard(this.box.current);
    }
  }

  render() {
    return (
      <div
        ref={this.box}
        className={clsx("card-list", "flex", "flex-row", "mb-6")}
      >
        {this.props.data.map((card, index) => {
          return (
            <div className={clsx("m-2")} key={card.title}>
              <Card
                title={card.title}
                info={card.info}
                poster={card.poster}
                tags={card.tags}
                showBtn={this.props.handleJs}
                index={index}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
