import Hero from '@/components/Hero'
import Join from '@/components/Join'
import Plans from '@/components/Plans'
import Programs from '@/components/Programs'
import Reasons from '@/components/Reasons'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </main>
  )
}
