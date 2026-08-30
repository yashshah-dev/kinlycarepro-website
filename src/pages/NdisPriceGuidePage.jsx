import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Check, ArrowRight, DollarSign, Calculator, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const paplItems = [
  {
    code: '01_011_0107_1_1',
    name: 'Assistance With Self-Care Activities - Standard - Weekday Daytime',
    category: 'Core - Daily Activities',
    priceLimit: '$67.56 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Daytime (06:00 – 20:00)'
  },
  {
    code: '01_015_0107_1_1',
    name: 'Assistance With Self-Care Activities - Standard - Weekday Evening',
    category: 'Core - Daily Activities',
    priceLimit: '$74.44 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Evening (20:00 – 00:00)'
  },
  {
    code: '01_002_0107_1_1',
    name: 'Assistance With Self-Care Activities - Standard - Active Night',
    category: 'Core - Daily Activities',
    priceLimit: '$75.82 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Night (00:00 – 06:00)'
  },
  {
    code: '01_013_0107_1_1',
    name: 'Assistance With Self-Care Activities - Standard - Saturday',
    category: 'Core - Daily Activities',
    priceLimit: '$95.07 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Saturday (All day)'
  },
  {
    code: '01_014_0107_1_1',
    name: 'Assistance With Self-Care Activities - Standard - Sunday',
    category: 'Core - Daily Activities',
    priceLimit: '$122.59 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Sunday (All day)'
  },
  {
    code: '01_012_0107_1_1',
    name: 'Assistance With Self-Care Activities - Standard - Public Holiday',
    category: 'Core - Daily Activities',
    priceLimit: '$150.10 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Public Holiday (All day)'
  },
  {
    code: '04_104_0125_6_1',
    name: 'Access Community, Social And Rec Activities - Standard - Weekday Daytime',
    category: 'Core - Social & Community',
    priceLimit: '$67.56 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Daytime (06:00 – 20:00)'
  },
  {
    code: '04_105_0125_6_1',
    name: 'Access Community, Social And Rec Activities - Standard - Weekday Evening',
    category: 'Core - Social & Community',
    priceLimit: '$74.44 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Evening (20:00 – 00:00)'
  },
  {
    code: '04_106_0125_6_1',
    name: 'Access Community, Social And Rec Activities - Standard - Saturday',
    category: 'Core - Social & Community',
    priceLimit: '$95.07 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Saturday (All day)'
  },
  {
    code: '04_107_0125_6_1',
    name: 'Access Community, Social And Rec Activities - Standard - Sunday',
    category: 'Core - Social & Community',
    priceLimit: '$122.59 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Sunday (All day)'
  },
  {
    code: '07_002_0106_8_3',
    name: 'Level 2: Coordination Of Supports',
    category: 'Capacity Building - Support Coordination',
    priceLimit: '$100.14 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Standard Hourly'
  },
  {
    code: '07_004_0132_8_3',
    name: 'Specialist Support Coordination',
    category: 'Capacity Building - Support Coordination',
    priceLimit: '$190.54 / hr',
    unit: 'Hour',
    quoteRequired: 'No',
    timeBand: 'Specialist Rate'
  },
  {
    code: '01_799_0107_1_1',
    name: 'Provider Travel - Non-Labour Costs (Per Kilometre)',
    category: 'Core - Travel & Transport',
    priceLimit: '$0.97 / km',
    unit: 'Kilometre (TRAN)',
    quoteRequired: 'No',
    timeBand: 'Standard Vehicle'
  },
  {
    code: '04_799_0125_6_1',
    name: 'Activity Based Transport (Social & Community)',
    category: 'Core - Travel & Transport',
    priceLimit: '$0.97 / km',
    unit: 'Kilometre (TRAN)',
    quoteRequired: 'No',
    timeBand: 'Modified Vehicle $1.30/km'
  },
  {
    code: '01_049_0107_1_1',
    name: 'Establishment Fee for Personal Care/Participation',
    category: 'Core - Daily Activities',
    priceLimit: '$654.70',
    unit: 'One-off fee',
    quoteRequired: 'No',
    timeBand: 'Establishment Rule'
  }
];

const categories = [
  'All Categories',
  'Core - Daily Activities',
  'Core - Social & Community',
  'Capacity Building - Support Coordination',
  'Core - Travel & Transport'
];

const NdisPriceGuidePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredItems = paplItems.filter((item) => {
    const matchesSearch =
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.timeBand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All Categories' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="NDIS Price Guide Explorer 2025–26 (PAPL Search & Rates) | Kinly CarePro"
        description="Search active NDIS Pricing Arrangements and Price Limits (PAPL 2025–26) support item codes, daytime/evening/weekend caps, travel TRAN rules, and Support Coordination rates."
        keywords="NDIS price guide 2025-26, PAPL 2025-26 item codes, NDIS line item search, NDIS price limits directory, NDIS hourly rates Australia, NDIS support item search"
        url="https://www.kinlycarepro.com/ndis-price-guide"
        breadcrumbs={[{ name: "NDIS Price Guide Explorer", path: "/ndis-price-guide" }]}
        faqs={[
          {
            question: "What is the NDIS PAPL 2025-26?",
            answer: "The NDIS Pricing Arrangements and Price Limits (PAPL) sets the maximum allowable prices that registered and unregistered providers can charge for NDIS supports."
          },
          {
            question: "How does Kinly CarePro handle price limit updates?",
            answer: "Kinly CarePro ingests active PAPL updates automatically so rosters, PRODA exports, and client invoices apply the exact price caps without manual spreadsheet lookups."
          }
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#f2fbff] via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 text-emerald-800 font-semibold text-xs uppercase tracking-wider mb-6 border border-emerald-200">
            <BookOpen className="w-4 h-4 text-emerald-600" /> Active NDIS Pricing Arrangements (PAPL 2025–26)
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            NDIS Price Guide Explorer
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Search active item codes, hourly price caps, travel rates, and group ratio limits. Built directly into Kinly CarePro's <strong>Deterministic Billing Engine</strong>.
          </p>

          {/* Engine Integration Callout */}
          <div className="mt-8 max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <p className="text-xs md:text-sm text-slate-800">
                <strong>Zero Manual Rate Lookups:</strong> Kinly CarePro automatically segments shifts at 6 AM / 8 PM / 12 AM and applies these exact limits with group ratios.
              </p>
            </div>
            <Link
              to="/features"
              className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-[#0b3b47] whitespace-nowrap"
            >
              See Billing Engine
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Directory Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Bar */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by code (e.g. 01_011), name, or time band (Evening, Saturday)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-4 h-4 text-slate-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-auto font-medium"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-6">NDIS Item Code</th>
                    <th className="py-4 px-6">Support Item Name & Time Band</th>
                    <th className="py-4 px-4">Category</th>
                    <th className="py-4 px-6 text-right">Price Limit (National)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-6 font-mono font-bold text-primary whitespace-nowrap">
                          {item.code}
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-semibold text-slate-900">{item.name}</p>
                          <span className="inline-block mt-1 px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium">
                            {item.timeBand}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-600 text-xs">
                          {item.category}
                        </td>
                        <td className="py-4 px-6 text-right font-mono font-extrabold text-emerald-700 whitespace-nowrap text-base">
                          {item.priceLimit}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="py-12 text-center text-slate-500">
                        No support items found matching your search query. Try another keyword or category filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer & Info */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-100 text-xs text-slate-600 space-y-2 border border-slate-200">
            <p>
              <strong>Note on Remote & Very Remote loadings:</strong> Remote areas receive an additional +40% loading, and Very Remote areas receive +50% loading on National price limits per NDIA guidelines.
            </p>
            <p>
              Kinly CarePro ingests active PAPL updates automatically so your rosters, PRODA exports, and client invoices are always compliant without spreadsheets.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NdisPriceGuidePage;
