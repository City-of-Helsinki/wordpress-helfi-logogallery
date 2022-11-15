/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, BlockControls, MediaUpload, URLInputButton } from '@wordpress/block-editor';
import { ToolbarGroup, Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

import { get } from 'lodash';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { imageUrl, linkUrl, imageAlt } = attributes;
	const IMAGE_SIZE = 'medium';

	const onSelectMedia = ( media ) => {
		// Try the "large" size URL, falling back to the "full" size URL below.
		const src = get( media, [ 'sizes', IMAGE_SIZE, 'url' ] ) || get( media, [ 'media_details', 'sizes', IMAGE_SIZE, 'source_url' ] );

		if ( ! media || ! media.url ) {
			setAttributes( {
				imageUrl: null,
				imageId: null,
				imageAlt: null,
			} );
			return;
		}

		setAttributes( {
			imageUrl: src || media.url,
			imageId: media.id,
			imageAlt: media?.alt,
		} );
	};

	const onSelectUrl = ( url ) => {
		setAttributes( {
			linkUrl: url,
		} );
	};

	const blockProps = useBlockProps( { className: 'wp-block-wordpress-helfi-logogallery-item grid__column grid_margin no-mt' } );

	return (
		<div { ...blockProps }>
			<BlockControls>
				<ToolbarGroup>
					<MediaUpload
						onSelect={ onSelectMedia }
						allowedTypes={ [ 'image' ] }
						value={ imageUrl }
						render={ ( { open } ) => (
							<Button
								className="components-toolbar__control"
								label={ __( 'Edit media' ) }
								icon="format-image"
								onClick={ open }
							/>
						) }
					/>
					<URLInputButton
						url={ linkUrl }
						onChange={ onSelectUrl }
					/>
				</ToolbarGroup>
			</BlockControls>
			<div className="logogallery-item-edit">
				{ imageUrl ? <img src={ imageUrl } alt={ imageAlt } /> : __( 'Insert new image' ) }
			</div>
		</div>
	);
}
