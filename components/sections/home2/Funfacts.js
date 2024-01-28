import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>        
            <section className="funfact-section centred">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                           
                                <div className="count-outer count-box">
                                    <CounterUp end={75} /><span>+</span>
                                </div>
                                <h4>Expert Doctors</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                               
                                <div className="count-outer count-box">
                                    <CounterUp end={7} /><span>k</span>
                                </div>
                                <h4>Happy Patients</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                
                                <div className="count-outer count-box">
                                    <CounterUp end={850} />
                                </div>
                                <h4>Modern Rooms</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                               
                                <div className="count-outer count-box">
                                    <CounterUp end={15} />
                                </div>
                                <h4>Awards Win</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
