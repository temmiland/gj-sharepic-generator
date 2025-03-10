import { useEffect } from "react";
import { useSharePic } from "../../context/SharePicContext";
import { SharePicLogo } from "../organism/SharePicLogo";
import { SharePicArrow } from "../organism/SharePicArrow";
import { SharePicContent } from "../organism/SharePicContent";
import { SharePicHeading } from "../organism/SharePicHeading";
import { SharePicPictogram } from "../organism/SharePicPictogram";
import { colorSets, highlightColors } from "../../constants/colors";

export default function SharePicTitleOnly() {

	const { state, dispatch } = useSharePic();

	useEffect(() => {
		dispatch({
			type: "INITIALIZE",
			payload: {
				localGroup: "Dresden",
				logoVisible: true,
				arrowVisible: false,
				headingTopOrBottom: true,
				heading: ["Corporate", "Design", "Generator", "*Test", "*123"],
				text: [],
				highlightColor: highlightColors[0],
				colorSet: colorSets[4],
				pictogram: null,
				pictogramPosition: { x: 175, y: 225 },
			}
		});
	}, []);

	return(
		<div className='sharepic-canvas' style={{ backgroundColor: state.colorSet.backgroundColor }}>
			<SharePicLogo
				localGroup={state.localGroup}
				visible={state.logoVisible}
				color={state.colorSet.accentColor}
			/>
			<SharePicArrow
				visible={state.arrowVisible}
				color={state.colorSet.accentColor}
			/>
			<SharePicContent
				topOrBottom={state.headingTopOrBottom}
			>
				<SharePicHeading
					multiLineText={state.heading}
					colorSet={state.colorSet}
					highlightColor={state.highlightColor}
					fontSize={3.75}
				/>
			</SharePicContent>
			<SharePicPictogram
				pictogram={state.pictogram}
				position={state.pictogramPosition}
				colorSet={state.colorSet}
			/>
		</div>
	);
}
