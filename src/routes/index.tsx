import Footer from "@/components/footer";
import Header from "@/components/header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <section
        id="hero"
        className="flex flex-1 flex-col justify-between px-12 h-screen bg-center bg-cover bg-no-repeat bg-[url('/background/picture-1.jpg')] bg-gray-500 bg-blend-multiply"
      >
        <Header />

        <div className="justify-end mb-18 space-y-8">
          <h1 className="text-6xl font-medium text-white max-w-md">
            Bangun Masa Depan dengan Energi Bersih
          </h1>
          <p className="text-2xl text-white max-w-xl mb-14">
            Kami membantu industri dan pemerintah beralih ke solusi energi
            terbarukan: surya, angin, dan biomassa.
          </p>

          <div className="space-x-2">
            <a
              href="#"
              className="text-sm text-white bg-black rounded-lg px-6 py-5"
            >
              Request Proposal
            </a>
            <a
              href="#"
              className="text-sm text-white bg-black rounded-lg px-6 py-5"
            >
              Lihat Proyek Kami
            </a>
          </div>
        </div>
      </section>

      <section className="px-12 py-40">
        <div className="flex h-full">
          <div className="flex items-center justify-between m-auto w-full">
            <p className="text-4xl max-w-4xl leading-12">
              Green Energy telah berpengalaman lebih dari 10 tahun mendampingi
              perusahaan dan instansi pemerintah dalam transisi energi bersih.
            </p>
            <div>
              <a
                href="#"
                className="text-sm text-white bg-black rounded-lg px-6 py-5"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="h-auto bg-slate-100 py-28 px-12">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full h-[624px] bg-center bg-cover bg-no-repeat bg-[url('/background/picture-2.jpg')] bg-gray-500 bg-blend-multiply rounded-3xl">
            <div className="flex flex-col h-full justify-end p-12">
              <h1 className="text-4xl text-white max-w-md">
                Konsultasi & Studi Kelayakan Energi Surya
              </h1>
            </div>
          </div>
          <div className="w-full h-[624px] bg-center bg-cover bg-no-repeat bg-[url('/background/picture-3.jpg')] bg-gray-500 bg-blend-multiply rounded-3xl">
            <div className="flex flex-col h-full justify-end p-12">
              <h1 className="text-4xl text-white max-w-md">
                Desain & Implementasi Sistem Angin
              </h1>
            </div>
          </div>
          <div className="w-full h-[624px] bg-center bg-cover bg-no-repeat bg-[url('/background/picture-4.jpg')] bg-gray-500 bg-blend-multiply rounded-3xl">
            <div className="flex flex-col h-full justify-end p-12">
              <h1 className="text-4xl text-white max-w-md">
                Proyek Biomassa & Waste-to-Energy
              </h1>
            </div>
          </div>
          <div className="w-full h-[624px] bg-center bg-cover bg-no-repeat bg-[url('/background/picture-5.jpg')] bg-gray-500 bg-blend-multiply rounded-3xl">
            <div className="flex flex-col h-full justify-end p-12">
              <h1 className="text-4xl text-white max-w-md">
                Konsultasi Regulasi & Manajemen Proyek
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 py-18">
        <div className="h-full flex items-center gap-x-18">
          <h1 className="text-5xl font-extrabold italic text-gray-400">
            Client Logo
          </h1>
          <h1 className="text-5xl font-extrabold italic text-gray-400">
            Client Logo
          </h1>
          <h1 className="text-5xl font-extrabold italic text-gray-400">
            Client Logo
          </h1>
          <h1 className="text-5xl font-extrabold italic text-gray-400">
            Client Logo
          </h1>
        </div>
      </section>

      <section className="h-screen px-12 py-12 bg-slate-100">
        <div className="h-full bg-center bg-cover bg-no-repeat bg-[url('/background/picture-6.jpg')] bg-gray-500 bg-blend-multiply rounded-3xl">
          <div className="flex flex-col h-full justify-center px-12">
            <div className="space-y-16">
              <h1 className="text-6xl font-medium text-white max-w-md">
                Siap beralih ke energi hijau?
              </h1>
              <p className="text-3xl font-medium text-white max-w-xl">
                Kami siap membantu Anda dari perencanaan hingga implementasi.
              </p>

              <a
                href="#"
                className="text-md font-medium text-gray-800 bg-white rounded-lg px-6 py-5"
              >
                Request Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
