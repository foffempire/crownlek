import Seo from '../components/common/Seo'
import Hero from '../components/home/Hero'
import FeaturedCollections from '../components/home/FeaturedCollections'
import FeaturedProducts from '../components/home/FeaturedProducts'
import BrandStory from '../components/home/BrandStory'
import WhyChooseUs from '../components/home/WhyChooseUs'
import LookbookPreview from '../components/home/LookbookPreview'
import Testimonials from '../components/home/Testimonials'
import InstagramGallery from '../components/home/InstagramGallery'
import Newsletter from '../components/home/Newsletter'

export default function Home() {
  return (
    <>
      <Seo
        title="African Native Attire"
        description="Crownlek crafts premium African native attire — agbada, senator wear, kaftans, lace and bespoke pieces. Tradition, tailored for today."
        path="/"
      />

      <Hero />
      <FeaturedCollections />
      <FeaturedProducts />
      <BrandStory />
      <WhyChooseUs />
      <LookbookPreview />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </>
  )
}
