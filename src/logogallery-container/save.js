/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 * @param {attributes} attributes Contains html-attributes for h2
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	return (
		<section { ...useBlockProps.save() }>
			<div className="alignfull">
				<div className="hds-container">
					<div className="grid">
						<div className='class="grid__column l-12 grid_margin"'>
							<RichText.Content tagName="h2" value={ attributes.heading } />
						</div>
					</div>
					<div className="grid sponsors-wrapper l-up-5 m-up-3 s-up-2 alignfull">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</section>
	);
}
