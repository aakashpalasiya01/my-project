import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Loading() {
    return (
        <SkeletonTheme
            baseColor="#eee"
            highlightColor="#ddd"
        >
            <main className="main_content">
                <section className="ccard_details">
                    <div className="container">
                        <div className="cc_card_head">
                            <div className="cc_card_head_title">
                                <Skeleton width={100} height={25} />
                            </div>
                        </div>
                            <Skeleton width={1058} height={25} />
                    </div>
                    <div style={{display:'flex', justifyContent:'center',flexDirection:'row', marginTop:'20px'}} >
                    {Array(4)
                        .fill(0)
                        .map((_, index) => (
                            <div className="row" key={index + 1}>
                                <div className="col-lg-6 col-xl-3" key={index + 1} style={{ marginRight: '10px' }}>
                                    <Skeleton width={293} height={125} />
                                </div>
                            </div>
                        ))}
                        </div>
                </section>
            </main>
        </SkeletonTheme>
    )
}