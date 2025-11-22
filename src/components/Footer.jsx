function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-sm">
            © {new Date().getFullYear()} HotWheels Hub. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-slate-600 hover:text-slate-900" href="#">Privacy</a>
            <a className="text-slate-600 hover:text-slate-900" href="#">Terms</a>
            <a className="text-slate-600 hover:text-slate-900" href="mailto:support@example.com">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
