import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * Client-side fallback for a recognised application route that cannot be
 * rendered. Deployment routing returns an HTTP 404 for unknown URLs; this
 * is a second safeguard so an unexpected client route is never indexable.
 */
const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Page not found | Kinly CarePro</title>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Page not found</h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
        The page you requested does not exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-lg bg-primary px-5 py-3 font-semibold text-white">Return home</Link>
        <Link to="/resources" className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800">Browse resources</Link>
      </div>
    </section>
  </>
);

export default NotFoundPage;
