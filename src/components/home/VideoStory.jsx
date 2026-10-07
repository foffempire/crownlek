import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

/** Split editorial story block: image left, narrative right. */
export default function VideoStory({video}) {
    return (
        <section className="bg-beige py-20 sm:py-28 lg:py-32">
            <div className="container-brand">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <Reveal className="relative flex justify-center lg:justify-end">
                        {/* embed video */}
                        <video
                            // width="100%"
                            // height="70%"
                            controls={false}
                            autoPlay
                            loop
                            playsInline
                            muted
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Reveal>

                    <Reveal delay={120}>
                        <SectionTitle
                            eyebrow="Embrace Africa"
                            title={
                                <>
                                    African Design.
                                    <br />
                                    worn with pride.
                                </>
                            }
                            description="We celebrate African heritage through carefully crafted native attire that combines traditional identity with contemporary elegance. Every garment begins as a conversation and ends as a piece worn with pride."
                        />


                        <Button to="/about" variant="outline" className="mt-10">
                            Discover our story
                        </Button>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
