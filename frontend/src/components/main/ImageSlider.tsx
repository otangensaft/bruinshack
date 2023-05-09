import React, { useState } from "react";

const ImageSlider = () => {
	const images = [
		"https://picsum.photos/id/1018/300/200",
		"https://picsum.photos/id/1025/300/200",
		"https://picsum.photos/id/1035/300/200",
		"https://picsum.photos/id/1045/300/200",
		"https://picsum.photos/id/1055/300/200",
		"https://picsum.photos/id/1065/300/200",
	];

	const [start, setStart] = useState(0);

	const handleNext = () => {
		if (start + 3 < images.length) {
			setStart(start + 1);
		}
	};

	const handlePrev = () => {
		if (start > 0) {
			setStart(start - 1);
		}
	};

	return (
		<div className="flex flex-row items-center justify-center">
			<button
				className="flex items-center justify-center mr-4 text-gray-600 border border-gray-400 rounded-full w-8 h-8 hover:bg-gray-200"
				onClick={handlePrev}
			>
				{"<"}
			</button>
			<div className="flex flex-row space-x-4">
				{images.slice(start, start + 3).map((image, index) => (
					<div key={index}>
						<img src={image} alt={`Slide ${index + 1}`} />
					</div>
				))}
			</div>
			<button
				className="flex items-center justify-center ml-4 text-gray-600 border border-gray-400 rounded-full w-8 h-8 hover:bg-gray-200"
				onClick={handleNext}
			>
				{">"}
			</button>
		</div>
	);
};

export default ImageSlider;
