import Footer from "@/component/hoc/LayoutComponent/Footer"
import Header from "@/component/hoc/LayoutComponent/Header"

export default function PublicLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        {/* <Header /> */}
        {children}
        {/* <Footer/> */}
      </div>
    )
  }