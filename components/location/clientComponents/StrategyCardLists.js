"use client";
import React, { useEffect } from "react";
let colorProp = []

function StrategyCardLists({ lists, color }) {

    colorProp.push(color)
    
	useEffect(() => {
		let ulElements = document.querySelectorAll(".strategy_list ul");
		if (ulElements) {
			ulElements.forEach((ul,index) => {
				ul.classList.add("space-y-3");
               
                let itemColor = colorProp[index % colorProp.length ];
                

				ul.querySelectorAll("li").forEach((li) => {
					li.classList.add("flex");

                

					// Check if an SVG icon already exists to avoid duplication
					if (!li.querySelector("svg")) {
						li.insertAdjacentHTML(
							"afterbegin",
							`<svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                class="flex-none mt-[1px] text-[22px]"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style="color: ${itemColor};"
                            >
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M16 12l-6 6V6z"></path>
                                </g>
                            </svg>`
						);
					}
				});
			});
		}
	}, [color]);

	return (
		<div>
			<div className="strategy_list" dangerouslySetInnerHTML={{ __html: lists }} />
		</div>
	);
}

export default StrategyCardLists;
