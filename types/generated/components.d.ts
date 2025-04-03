import type { Schema, Struct } from '@strapi/strapi';

export interface InformationContentSection extends Struct.ComponentSchema {
  collectionName: 'components_information_content_sections';
  info: {
    displayName: 'Content Section';
  };
  attributes: {
    BackgroundColor: Schema.Attribute.String;
    Content: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImagePosition: Schema.Attribute.Enumeration<['Left', 'Right']>;
    Title: Schema.Attribute.String;
  };
}

export interface InformationCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_information_cta_sections';
  info: {
    displayName: 'CTA Section';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface InformationFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_information_feature_sections';
  info: {
    displayName: 'Feature Section';
  };
  attributes: {
    Features: Schema.Attribute.Component<'information.features', true>;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface InformationFeatures extends Struct.ComponentSchema {
  collectionName: 'components_information_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface InformationHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_information_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CTALink: Schema.Attribute.String;
    CTAText: Schema.Attribute.String;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    Variant: Schema.Attribute.Enumeration<['Primary', 'Secondary']>;
  };
}

export interface InformationSeo extends Struct.ComponentSchema {
  collectionName: 'components_information_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {};
}

export interface InformationTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_information_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'information.content-section': InformationContentSection;
      'information.cta-section': InformationCtaSection;
      'information.feature-section': InformationFeatureSection;
      'information.features': InformationFeatures;
      'information.hero-section': InformationHeroSection;
      'information.seo': InformationSeo;
      'information.testimonial-section': InformationTestimonialSection;
    }
  }
}
