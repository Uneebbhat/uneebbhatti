import MainLayout from "@/layout/MainLayout";
import { FC } from "react";
import fast from "@/assets/fast.svg";
import bata from "@/assets/bata.svg";
import service from "@/assets/service.svg";
import servaid from "@/assets/servaid.svg";
import ndure from "@/assets/ndure.svg";
import shoePlanet from "@/assets/shoe-planet.svg";
import calza from "@/assets/calza.svg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import edit from "@/assets/custom.png";
import printing from "@/assets/printing.png";
import clock from "@/assets/clock.png";
import years from "@/assets/years.png";

const PrintingProjects: FC = () => {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <MainLayout>
        <div className="hero-section flex flex-col items-center justify-center p-4">
          <div className="mt-[50px] mb-[50px] py-[50px] px-4 text-center">
            <h2 className="text-5xl font-bold mb-4">
              Elevate Your Brand with Quality Printing
            </h2>
            <p className=" mb-6">
              Transform your ideas into stunning print designs. Our printing
              solutions are crafted to meet your needs.
            </p>
            <Link to="/contact">
              <Button>Get a free Quote</Button>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Ready to start your printing project? Contact us today!
            </p>
          </div>
          <div className="w-full text-center">
            <h2 className="heading text-2xl">Our Clients</h2>
            <div className="printing-projects-clients w-full overflow-scroll flex gap-[50px] items-center justify-center">
              <img src={fast} alt="" width={60} />
              <img src={bata} alt="" width={100} />
              <img src={service} alt="" width={100} />
              <img src={servaid} alt="" width={100} />
              <img src={ndure} alt="" width={100} />
              <img src={shoePlanet} alt="" width={100} />
              <img src={calza} alt="" width={60} />
            </div>
          </div>

          <section>
            <div>
              <h2 className="heading text-center text-2xl mt-[50px]">
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[20px]">
                <Card className="text-center">
                  <CardHeader className="flex flex-col items-center">
                    <img
                      src={printing}
                      alt="High-Quality Printing"
                      width={50}
                    />
                    <CardTitle>High-Quality Printing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Delivering exceptional print quality using state-of-the-art
                    technology to ensure every project meets the highest
                    standards
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader className="flex flex-col items-center">
                    <img src={years} alt="40+ Years of Expertise" width={130} />
                    <CardTitle>40+ Years of Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    With over four decades of experience, our family-run
                    business brings a deep understanding of the printing
                    industry to every job
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader className="flex flex-col items-center">
                    <img
                      src={edit}
                      alt="Custom Printing Solutions"
                      width={50}
                    />
                    <CardTitle>Custom Printing Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Offering personalized solutions tailored to the specific
                    needs of our clients, from small businesses to large-scale
                    projects
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader className="flex flex-col items-center">
                    <img src={clock} alt="Fast Turnaround Time" width={50} />
                    <CardTitle>Fast Turnaround Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Committed to delivering your projects on time, every time,
                    without compromising on quality or attention to detail
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <div>
            <h2 className="heading text-2xl mt-[100px] text-center">
              Learn more about us:
            </h2>
            <div className="text-left mt-[50px]">
              <p>Heritage and Expertise</p>

              <br />

              <p>
                At <span className="font-bold">Print Master</span>, we take
                pride in a legacy that spans over 40 years in the printing
                industry. Founded by my father, our family-run printing press
                has built a reputation for quality, reliability, and innovation.
                With each project, we aim to uphold the values of craftsmanship
                and excellence that have defined our journey.
              </p>

              <br />

              <h2 className="heading">Commitment to Quality</h2>
              <p>
                We understand that every print tells a story. Our team is
                dedicated to delivering exceptional products that meet the
                highest standards. From business cards to large-format prints,
                we utilize state-of-the-art technology and materials to ensure
                that each item reflects your vision with precision and clarity.
              </p>

              <br />

              <h2 className="heading">Customer-Centric Approach</h2>
              <p>
                Customer satisfaction is at the heart of our business. We
                believe in fostering strong relationships with our clients by
                providing personalized service and attention to detail. Our goal
                is to understand your needs and exceed your expectations,
                ensuring a seamless experience from concept to delivery.
              </p>

              <br />
              <h2 className="heading">Expanding into the Digital Realm</h2>
              <p>
                As the next generation of our family business, I am excited to
                embrace new opportunities in the digital space. By integrating
                modern technology into our operations, we aim to streamline
                processes, enhance customer interactions, and reach a broader
                audience. Our commitment to quality remains unwavering as we
                evolve to meet the changing needs of our customers.
              </p>

              <br />
              <h2 className="heading">Sustainability and Responsibility</h2>
              <p>
                We are dedicated to sustainable practices, utilizing
                eco-friendly materials and methods wherever possible. Our
                responsibility to the environment and community drives us to
                minimize waste and promote sustainable printing solutions.
              </p>
            </div>
          </div>
          <section className="mt-[50px] mb-[50px]">
            <div>
              <h2 className="heading text-2xl text-center mb-[30px]">
                What our client say about us?
              </h2>
              <div className="grid content-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[20px]">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex flex-col gap-2">
                      <img src={fast} alt="Fast University" width={50} />
                      Fast University
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    "Print Master has consistently provided us with high-quality
                    printing services. Their professionalism and attention to
                    detail make them our go-to partner for all our printing
                    needs!"
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex flex-col gap-2">
                      <img src={ndure} alt="Bata" width={80} />
                      NDURE
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    "We have been extremely satisfied with Print Master's
                    services. Their team is responsive, and the print quality is
                    always top-notch. Highly recommend!"
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>
                      <img src={service} alt="Shoe Planet" width={80} />
                      Service Shoes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    "Print Master delivers exceptional service every time. Their
                    commitment to quality and customer satisfaction sets them
                    apart in the printing industry!"
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
};

export default PrintingProjects;
