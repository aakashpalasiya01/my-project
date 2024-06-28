import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const SafetyLoading = () => {
    return (
            <SkeletonTheme baseColor="#fff" highlightColor="#ddd">
                <section className="privacy_policy">
                    <section className="bred_eles">
                        <div className="container">
                            <Skeleton width={90} height={10} />
                        </div>
                    </section>
                    <div className="container">
                        <div className="privacy_content">
                            <Skeleton width={90} height={10} />
                            <br />
                            <Skeleton count={1} />
                            <br />
                            <Skeleton count={2} />
                            <br />
                            <Skeleton count={3} />
                            <br />
                            <Skeleton count={2} />
                            <br />
                            <Skeleton count={2} />
                        </div>
                    </div>
                </section>
            </SkeletonTheme>
    )
}

export default SafetyLoading