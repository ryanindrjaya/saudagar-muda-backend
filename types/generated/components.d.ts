import type { Schema, Attribute } from '@strapi/strapi';

export interface LandingPageComponent extends Schema.Component {
  collectionName: 'components_offer_components';
  info: {
    displayName: 'Divisi Offer';
    icon: 'doctor';
    description: '';
  };
  attributes: {
    judul: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    deskripsi: Attribute.Text & Attribute.Required;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'landing-page.component': LandingPageComponent;
    }
  }
}
