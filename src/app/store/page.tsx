import { Container } from '@/components'

export default function Store() {
  return (
    <Container>
      <div className="mx-auto min-h-[calc(85vh)] px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="my-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-3xl">
          <div>
            <h2 className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px font-semibold uppercase tracking-wider">
              App Store
            </h2>
          </div>
          <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block text-base-3">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="text-blue-gray-100 absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)" width="52" height="24" />
              </svg>
              <span className="relative mr-2 bg-base-6 px-2 text-base-12">ExpressoTS</span>
            </span>
            <span className="text-base-6">Provider Apps</span>
          </h2>
          <p className="mt-4 text-base text-base-2 md:text-lg">Under development.</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"></div>
      </div>
    </Container>
  )
}
