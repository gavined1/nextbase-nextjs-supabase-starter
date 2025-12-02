import {
  ArrowRight,
  Bus,
  Coins,
  Hotel,
  Image as ImageIcon,
  Languages,
  ScanLine,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Utensils,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="bg-white text-slate-900 antialiased selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Brand Logo */}
            <Image
              src="/logos/angkor-menu-favicon.png"
              alt="Angkor Menu"
              width={28}
              height={28}
              className="rounded"
            />
            <Link
              href="/"
              className="text-lg font-semibold tracking-tighter text-slate-950"
            >
              ANGKOR MENU.
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#demo"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Demo
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Log in
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900/5"
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-8">
            <span className="text-base">🇰🇭</span>
            <span className="text-xs font-medium text-orange-800 uppercase tracking-wide">
              Made in Cambodia
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
            Showcase your products{' '}
            <br className="hidden md:block" /> beautifully.
          </h1>

          <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto font-normal leading-relaxed">
            The mobile-first digital catalog for restaurants, retail, and
            hotels. Instant updates, dual currency support, and zero printing
            costs.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/login"
              className="w-full md:w-auto px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
            >
              Create Catalog <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/menu/omni"
              className="w-full md:w-auto px-8 py-3 bg-white text-slate-600 border border-slate-200 text-sm font-medium rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <ScanLine className="w-4 h-4" /> View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Catalog Preview */}
      <section id="demo" className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-slate-50 border border-slate-200 p-4 md:p-12 shadow-2xl shadow-slate-200/50 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-rose-100/40 blur-3xl opacity-60 -z-10 rounded-full translate-x-1/3 -translate-y-1/3" />

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Feature Highlights */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-medium tracking-tight text-slate-900">
                    Your menu, reimagined for the digital age.
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Traditional paper menus are expensive and static. Angkor
                    Menu gives you a dynamic, searchable, and eco-friendly way
                    to connect with customers.
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white border border-slate-100 rounded-lg shadow-sm shrink-0">
                      <Languages className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Khmer & English Ready
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Native support for multiple languages. Auto-detects user
                        preference.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white border border-slate-100 rounded-lg shadow-sm shrink-0">
                      <Coins className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Multi-Currency Display
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Display prices in USD ($) and KHR (៛) simultaneously
                        with auto-conversion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Phone UI Mockup with Scaled Iframe */}
              <div className="relative flex justify-center">
                {/* Phone Frame */}
                <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-slate-900 rounded-[2.5rem] shadow-2xl p-2 md:p-2.5">
                  {/* Screen container - clips everything */}
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white">
                    {/* Scaled iframe container - calculated to fill screen exactly */}
                    {/* Mobile: screen is 264x544, scale = 264/375 = 0.704 */}
                    {/* Desktop: screen is 300x620, scale = 300/375 = 0.8 */}
                    <div
                      className="absolute origin-top-left w-[375px] h-[900px] scale-[0.704] md:scale-[0.8]"
                      style={{
                        transformOrigin: 'top left',
                      }}
                    >
                      <iframe
                        src="/menu/omni"
                        className="w-full h-full border-0"
                        title="Angkor Menu Demo"
                        style={{
                          pointerEvents: 'none',
                        }}
                      />
                    </div>

                    {/* Click overlay to go to demo */}
                    <Link
                      href="/menu/omni"
                      className="absolute inset-0 z-10 flex items-center justify-center bg-transparent hover:bg-black/10 transition-colors group"
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white px-5 py-2.5 rounded-full shadow-xl">
                        <span className="text-sm font-semibold text-slate-900">View Demo →</span>
                      </div>
                    </Link>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-slate-900 rounded-b-xl z-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Everything needed to <br />
              run a smarter business.
            </h2>
            <p className="text-slate-500 text-sm max-w-md">
              Designed for speed, built for reliability. From street food stalls
              to luxury hotels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Mobile First */}
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all hover:shadow-lg hover:shadow-slate-100/50">
              <div className="h-10 w-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                <Smartphone className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Mobile-First Design
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Optimized for smartphones where 80% of customers browse. Fast
                loading even on 3G connections.
              </p>
            </div>

            {/* Feature 2: Smart Search */}
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all hover:shadow-lg hover:shadow-slate-100/50">
              <div className="h-10 w-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                <Search className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Instant Search & Filter
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Customers find items instantly as they type. Filter by category,
                dietary tags, or specials.
              </p>
            </div>

            {/* Feature 3: Social Sharing */}
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all hover:shadow-lg hover:shadow-slate-100/50">
              <div className="h-10 w-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                <Share2 className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Social Sharing
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Share specific items directly to Telegram, WhatsApp, or Facebook
                with rich link previews.
              </p>
            </div>

            {/* Feature 4 (Span 2): Visuals */}
            <div className="md:col-span-2 group p-8 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                  <ImageIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  Beautiful Visual Experience
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                  Showcase your offerings with stunning hero banners and
                  multi-image galleries. Support for high-quality photos that
                  make your products shine.
                </p>
              </div>
              {/* Decorative Element */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-orange-600 rounded-full opacity-20 blur-3xl pointer-events-none" />
            </div>

            {/* Feature 5: Security/Tech */}
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all hover:shadow-lg hover:shadow-slate-100/50 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-slate-700" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Enterprise Security
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Built with Row Level Security, HTTPS everywhere, and optimized
                  for SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        id="use-cases"
        className="py-20 border-y border-slate-100 bg-slate-50/50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
              Versatile Platform
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Who is Angkor Menu for?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Use Case 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 text-center hover:border-orange-200 transition-colors cursor-default">
              <div className="mx-auto h-12 w-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-orange-600">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Restaurants
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Digital menus & specials
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 text-center hover:border-orange-200 transition-colors cursor-default">
              <div className="mx-auto h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Retail Stores
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Product catalogs & inventory
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 text-center hover:border-orange-200 transition-colors cursor-default">
              <div className="mx-auto h-12 w-12 bg-emerald-50 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                <Hotel className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Hotels</h3>
              <p className="text-xs text-slate-500 mt-2">
                Room service & amenities
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 text-center hover:border-orange-200 transition-colors cursor-default">
              <div className="mx-auto h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center mb-4 text-purple-600">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Transport</h3>
              <p className="text-xs text-slate-500 mt-2">Routes & ticketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">
            Ready to digitize your business?
          </h2>
          <p className="text-lg text-slate-500 mb-10 font-normal">
            Join businesses across Southeast Asia modernizing their workflow.{' '}
            <br /> Setup takes less than 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10"
            >
              Get Started for Free
            </Link>
            <Link
              href="mailto:support@angkormenu.com"
              className="w-full sm:w-auto px-8 py-3 bg-white text-slate-900 border border-slate-200 text-sm font-medium rounded-lg hover:bg-slate-50 transition-all"
            >
              Contact Sales
            </Link>
          </div>
          <p className="text-xs text-slate-400 mt-6">
            Proudly built in Cambodia 🇰🇭
          </p>
        </div>
      </section>
    </div>
  );
}
