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
		<div className="flex flex-col items-center justify-center">
			<div className="flex flex-row items-center justify-center mb-4">
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
			<div className="flex items-center justify-center space-x-2">
				{images.map((_, index) => (
					<div
						key={index}
						className={`w-3 h-3 rounded-full ${
							index >= start && index < start + 3
								? "bg-gray-600"
								: "bg-gray-200"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
