/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function save( props ) {
	const { attributes } = props;

	const { imageUrl, linkUrl, imageAlt } = attributes;
	const ConditionalWrapper = ( { condition, wrapper, children } ) => condition ? wrapper( children ) : children;

	const blockProps = useBlockProps.save( {
		className: 'grid__column grid_margin no-mt',
	} );

	return (
		<div { ...blockProps }>
			<ConditionalWrapper condition={ linkUrl } wrapper={ ( children ) => <a href={ linkUrl }>{ children }</a> } >
				<img src={ imageUrl } alt={ imageAlt } />
			</ConditionalWrapper>
		</div>
	);
}
