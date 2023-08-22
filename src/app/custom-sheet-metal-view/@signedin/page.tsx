//@ts-nocheck
"use client";
import { baseUrl } from "@/app/url";
import { useSearchParams } from "next/navigation";
import "../bootstrap.min.css";
import { useEffect } from "react";

export default function Signedin() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    // disable all inputs

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.disabled = true;
    });

    fetch(`${baseUrl}cart/view-custom-sheet-metal-quote/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}")["access-token"] || ""
        }`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          if (res.status === 400) {
          } else if (res.status === 401) {
          } else {
            console.log("error");
          }
        }
      })
      .then((data) => {
        const json =
          data["results"][0]["sheet_metal_items"][0]["custom_sheet_metal"][
            "custom_sheet_metal_details"
          ];
        // new formdata from json
        const data2 = new FormData();
        for (const [key, value] of Object.entries(json)) {
          data2.append(key, value);
        }
        data = data2;

        // fill the form elements with the data
        for (const [key, value] of data.entries()) {
          const input = document.querySelector(`[name="${key}"]`);
          if (input) {
            input.value = value;
          }
          if (input.type == "checkbox") {
            input.checked = value;
          }
        }
      });
  }, []);

  return (
    <>
      <link
        href="./Custom Order Request _ Air On_files/style(1).css"
        rel="stylesheet"
      />
      <form aria-disabled>
        <div className="body pt-28">
          <div className="container">
            <div className="row">
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div>
                      <h2>
                        <span>1</span> Stack Elbow{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue={90}
                            name="Stack_Elbow"
                          />
                          <b>90°</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue={45}
                            name="Stack_Elbow"
                          />
                          <b>45°</b>
                        </label>
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inches"
                            name="Variation1"
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL one inches"
                            name="Variation1"
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name="v1_gauge"
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name="v1_qty"
                        />
                      </div>
                      <div className="form-group ex">
                        <label>ST90</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name="v1_st90_a"
                        />
                        <label>X</label>
                        <span className="b">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name="v1_st90_b"
                        />
                        <label>with</label>
                        <input
                          type="text"
                          className="form-control"
                          name="v1_st90_c1"
                        />
                        <span className="e">c</span>
                        <label>Rd Thr</label>
                      </div>
                      <br />
                      <div className="form-group">
                        <br />
                        <label>OR</label>
                        <span className="c">c</span>
                        <input
                          type="text"
                          className="form-control"
                          name="v1_st90_c2"
                        />
                        <label>X</label>
                        <span className="d">c</span>
                        <input
                          type="text"
                          className="form-control"
                          name="v1_st90_c3"
                        />
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="RAD HEEL"
                            name="RAD_HEEL"
                          />
                          <b>RAD HEEL</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="SQ_HEEL"
                            name="RAD_HEEL"
                          />
                          <b>SQ HEEL</b>
                        </label>
                      </div>
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name="v1_endsj1"
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name="v1_endsj2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inches"
                            name="variation2"
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inches"
                            name="variation2"
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name="v2_gauge"
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name="v2_qty"
                        />
                      </div>
                      <div className="form-group ex">
                        <label>ST90</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name="v2_st90_a"
                        />
                        <label>X</label>
                        <span className="b">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name="v2_st90_b"
                        />
                        <label>with</label>
                        <input
                          type="text"
                          className="form-control"
                          name="v2_st90_c1"
                        />
                        <span className="e">c</span>
                        <label>Rd Thr</label>
                      </div>
                      <br />
                      <div className="form-group">
                        <br />
                        <label>OR</label>
                        <span className="c">c</span>
                        <input
                          type="text"
                          className="form-control"
                          name="v2_st90_c2"
                        />
                        <label>X</label>
                        <span className="d">c</span>
                        <input
                          type="text"
                          className="form-control"
                          name="v2_st90_c3"
                        />
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="RAD HEEL"
                            name="v2_RAD_HEEL"
                          />
                          <b>RAD HEEL</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="SQ HEEL"
                            name="v2_RAD_HEEL"
                          />
                          <b>SQ HEEL</b>
                        </label>
                      </div>
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name="v2_ends_j1"
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name="v2_ends_j2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div>
                      <h2>
                        <span>2</span> Side Angle{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue={90}
                            name="2_side_angle"
                          />
                          <b>90°</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue={45}
                            name="2_side_angle"
                          />
                          <b>45°</b>
                        </label>
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/2.png"
                        alt=""
                      />
                      <br />
                      <br />
                      <label>D)</label>{" "}
                      <label className="checkbox-inline">
                        <input type="checkbox" defaultValue="Yes" name="2_d" />
                        <b>TURNING VANE OPTION</b>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Dl half inches"
                            name="2v"
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inches"
                            name="2v"
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name="2_gauge"
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name="2_qty"
                        />
                      </div>
                      <div className="form-group ex">
                        <label>SD 90</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name="2sd_a"
                        />
                        <label>X</label>
                        <span className="b">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name="2sd_b"
                        />
                        <label>with</label>
                        <input
                          type="text"
                          className="form-control"
                          name="2sd_c1"
                        />
                        <span className="e">c</span>
                        <label>Rd Thr</label>
                      </div>
                      <br />
                      <div className="form-group">
                        <br />
                        <label>OR</label>
                        <span className="c">c</span>
                        <input
                          type="text"
                          className="form-control"
                          name="2sd_c2"
                        />
                        <label>X</label>
                        <span className="d">c</span>
                        <input
                          type="text"
                          className="form-control"
                          name="2sd_c3"
                        />
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="RAD HEEL"
                            name="2v_RAD_HEEL"
                          />
                          <b>RAD HEEL</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="SQ HEEL"
                            name="2v_RAD_HEEL"
                          />
                          <b>SQ HEEL</b>
                        </label>
                      </div>
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name="2_v1_ends_j1"
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name="2_v1_ends_j2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inches"
                            name="2v2"
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inches"
                            name="2v2"
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name="2v2_gauge"
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name="2v2_qty"
                        />
                      </div>
                      <div className="form-group ex">
                        <label>SD 90</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name="2v2_sd_a"
                        />
                        <label>X</label>
                        <span className="b">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name="2v2_sd_b"
                        />
                        <label>with</label>
                        <input
                          type="text"
                          className="form-control"
                          name="2v2_sd_c"
                        />
                        <span className="e">c</span>
                        <label>Rd Thr</label>
                      </div>
                      <br />
                      <div className="form-group">
                        <br />
                        <label>OR</label>
                        <span className="c">c</span>
                        <input
                          type="text"
                          className="form-control"
                          name="2v2_sd_c1"
                        />
                        <label>X</label>
                        <span className="d">c</span>
                        <input
                          type="text"
                          className="form-control"
                          name="2v2_sd_c2"
                        />
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="RAD HEEL"
                            name="2v2_red_hell"
                          />
                          <b>RAD HEEL</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="SQ HEEL"
                            name="2v2_red_hell"
                          />
                          <b>SQ HEEL</b>
                        </label>
                      </div>
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name="2v2_ends_j1"
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name="2v2_ends_j2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div>
                      <h2>
                        <span>3</span> Stack Elbow{" "}
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue={90} name={1} />
                          <b>90°</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue={45} name={1} />
                          <b>45°</b>
                        </label>
                      </h2>
                      <h2 style={{ marginTop: 0, marginLeft: 45 }}>
                        {" "}
                        Reducing
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/3.png"
                        alt=""
                      />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Dl half inches"
                            name={2}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inches"
                            name={2}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input type="text" className="form-control" name={3} />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input type="text" className="form-control" name={4} />
                      </div>
                      <div className="form-group">
                        <label>Indicate:</label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Turning Up"
                            name={5}
                          />
                          <b>Turning Up</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Turning Down"
                            name={5}
                          />
                          <b>Turning Down</b>
                        </label>
                        <br />
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FRS" name={5} />
                          <b>FRS</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FLS" name={5} />
                          <b>FLS</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="O/C" name={5} />
                          <b>O/C</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="SQ HEEL"
                            name={5}
                          />
                          <b>SQ HEEL</b>
                        </label>
                      </div>
                      <div className="form-group yj">
                        <label>ST90</label>
                        <span className="a">a</span>
                        <input type="text" className="form-control" name={6} />
                        <label>X</label>
                        <span className="b">b</span>
                        <input type="text" className="form-control" name={7} />
                        <label>to</label>
                        <input type="text" className="form-control" name={8} />
                        <span className="e">c</span>
                        <label>X</label>
                        <span className="z">D</span>
                        <input type="text" className="form-control" name={9} />
                      </div>
                      <div className="form-group yj gn">
                        <br />
                        <label>with</label>
                        <input type="text" className="form-control" name={10} />
                        <span className="a">E</span>
                        <label>
                          Rd Thr <b>OR</b>
                        </label>
                        <span className="b">E</span>
                        <input type="text" className="form-control" name={11} />
                        <label>X</label>
                        <span className="d">E</span>
                        <input type="text" className="form-control" name={12} />
                        <label>Sq Thr</label>
                      </div>
                      <div className="form-group">
                        <br />
                        <label>ENDS J1</label>
                        <input type="text" className="form-control" name={13} />
                        <label>J2</label>
                        <input type="text" className="form-control" name={14} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inches"
                            name={15}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue=" one inches"
                            name={15}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input type="text" className="form-control" name={16} />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input type="text" className="form-control" name={17} />
                      </div>
                      <div className="form-group">
                        <label>Indicate:</label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Turning Up"
                            name={18}
                          />
                          <b>Turning Up</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Turning Down"
                            name={18}
                          />
                          <b>Turning Down</b>
                        </label>
                        <br />
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FRS" name={18} />
                          <b>FRS</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FLS" name={18} />
                          <b>FLS</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="O/C" name={18} />
                          <b>O/C</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="SQ HEEL"
                            name={18}
                          />
                          <b>SQ HEEL</b>
                        </label>
                      </div>
                      <div className="form-group yj">
                        <label>ST90</label>
                        <span className="a">a</span>
                        <input type="text" className="form-control" name={19} />
                        <label>X</label>
                        <span className="b">b</span>
                        <input type="text" className="form-control" name={20} />
                        <label>to</label>
                        <input type="text" className="form-control" name={21} />
                        <span className="e">c</span>
                        <label>X</label>
                        <span className="z">D</span>
                        <input type="text" className="form-control" name={22} />
                      </div>
                      <div className="form-group yj gn">
                        <br />
                        <label>with</label>
                        <input type="text" className="form-control" name={23} />
                        <span className="a">E</span>
                        <label>
                          Rd Thr <b>OR</b>
                        </label>
                        <span className="b">E</span>
                        <input type="text" className="form-control" name={24} />
                        <label>X</label>
                        <span className="d">E</span>
                        <input type="text" className="form-control" name={25} />
                        <label>Sq Thr</label>
                      </div>
                      <div className="form-group">
                        <br />
                        <label>ENDS J1</label>
                        <input type="text" className="form-control" name={26} />
                        <label>J2</label>
                        <input type="text" className="form-control" name={27} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div>
                      <h2>
                        <span>4</span> Side Angle{" "}
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue={90} name={28} />{" "}
                          <b>90°</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue={45} name={28} />
                          <b>45°</b>
                        </label>
                      </h2>
                      <h2 style={{ marginTop: 0, marginLeft: 45 }}>
                        {" "}
                        Reducing
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/4.png"
                        alt=""
                      />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Half inch"
                            name={29}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={29}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input type="text" className="form-control" name={30} />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input type="text" className="form-control" name={31} />
                      </div>
                      <div className="form-group">
                        <label>Indicate:</label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Turning Left"
                            name={32}
                          />
                          <b>Turning Left</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Turning Right"
                            name={32}
                          />
                          <b>Turning Right</b>
                        </label>
                        <br />
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FOT" name={32} />
                          <b>FOT</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FOB" name={32} />
                          <b>FOB</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="O/C" name={32} />
                          <b>O/C</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="SQ HEEL"
                            name={32}
                          />
                          <b>SQ HEEL</b>
                        </label>
                      </div>
                      <div className="form-group yj">
                        <label>SD90</label>
                        <span className="a">a</span>
                        <input type="text" className="form-control" name={33} />
                        <label>X</label>
                        <span className="b">b</span>
                        <input type="text" className="form-control" name={34} />
                        <label>to</label>
                        <input type="text" className="form-control" name={35} />
                        <span className="e">c</span>
                        <label>X</label>
                        <span className="z">D</span>
                        <input type="text" className="form-control" name={36} />
                      </div>
                      <div className="form-group yj gn">
                        <br />
                        <label>with</label>
                        <input type="text" className="form-control" name={37} />
                        <span className="a">E</span>
                        <label>
                          Rd Thr <b>OR</b>
                        </label>
                        <span className="b">E</span>
                        <input type="text" className="form-control" name={38} />
                        <label>X</label>
                        <span className="d">E</span>
                        <input type="text" className="form-control" name={39} />
                        <label>Sq Thr</label>
                      </div>
                      <div className="form-group">
                        <br />
                        <label>ENDS J1</label>
                        <input type="text" className="form-control" name={40} />
                        <label>J2</label>
                        <input type="text" className="form-control" name={41} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={42}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={42}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input type="text" className="form-control" name={43} />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input type="text" className="form-control" name={44} />
                      </div>
                      <div className="form-group">
                        <label>Indicate:</label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Turning Left"
                            name={45}
                          />
                          <b>Turning Left</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Turning Right"
                            name={45}
                          />
                          <b>Turning Right</b>
                        </label>
                        <br />
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FOT" name={45} />
                          <b>FOT</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FOB" name={45} />
                          <b>FOB</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="O/C" name={45} />
                          <b>O/C</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="SQ HEEL"
                            name={45}
                          />
                          <b>SQ HEEL</b>
                        </label>
                      </div>
                      <div className="form-group yj">
                        <label>SD90</label>
                        <span className="a">a</span>
                        <input type="text" className="form-control" name={46} />
                        <label>X</label>
                        <span className="b">b</span>
                        <input type="text" className="form-control" name={47} />
                        <label>to</label>
                        <input type="text" className="form-control" name={48} />
                        <span className="e">c</span>
                        <label>X</label>
                        <span className="z">D</span>
                        <input type="text" className="form-control" name={49} />
                      </div>
                      <div className="form-group yj gn">
                        <br />
                        <label>with</label>
                        <input type="text" className="form-control" name={50} />
                        <span className="a">E</span>
                        <label>
                          Rd Thr <b>OR</b>
                        </label>
                        <span className="b">E</span>
                        <input type="text" className="form-control" name={51} />
                        <label>X</label>
                        <span className="d">E</span>
                        <input type="text" className="form-control" name={52} />
                        <label>Sq Thr</label>
                      </div>
                      <div className="form-group">
                        <br />
                        <label>ENDS J1</label>
                        <input type="text" className="form-control" name={53} />
                        <label>J2</label>
                        <input type="text" className="form-control" name={54} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="frm-in">
                    <div>
                      <h2>
                        <span>5</span> Side Take-off{" "}
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/5.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="frm-in sm">
                    <div className="form-inline">
                      <h3>
                        Variation1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={55}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={55}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input type="text" className="form-control" name={56} />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input type="text" className="form-control" name={57} />
                      </div>
                      <div className="form-group ex smn">
                        <label>STO</label>
                        <span className="a">a</span>
                        <input type="text" className="form-control" name={58} />
                        <label>X</label>
                        <span className="b">b</span>
                        <input type="text" className="form-control" name={59} />
                        <input type="text" className="form-control" name={60} />
                        <span className="e">c</span>
                        <label>Long</label>
                      </div>
                      <br />
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Splitter Damper"
                            name={61}
                          />
                          <b>Splitter Damper</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="PR Damper"
                            name={61}
                          />
                          <b>PR Damper</b>
                        </label>
                      </div>
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input type="text" className="form-control" name={62} />
                        <label>J2</label>
                        <input type="text" className="form-control" name={63} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="frm-in sm">
                    <div className="form-inline">
                      <h3>
                        Variation2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL Half inch"
                            name={64}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={64}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input type="text" className="form-control" name={65} />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input type="text" className="form-control" name={66} />
                      </div>
                      <div className="form-group ex smn">
                        <label>STO</label>
                        <span className="a">a</span>
                        <input type="text" className="form-control" name={67} />
                        <label>X</label>
                        <span className="b">b</span>
                        <input type="text" className="form-control" name={68} />
                        <input type="text" className="form-control" name={69} />
                        <span className="e">c</span>
                        <label>Long</label>
                      </div>
                      <br />
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Splitter Damper"
                            name={70}
                          />
                          <b>Splitter Damper</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="PR Damper"
                            name={70}
                          />
                          <b>PR Damper</b>
                        </label>
                      </div>
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input type="text" className="form-control" name={71} />
                        <label>J2</label>
                        <input type="text" className="form-control" name={72} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="frm-in sm">
                    <div className="form-inline">
                      <h3>
                        Variation3:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={73}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={73}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input type="text" className="form-control" name={74} />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input type="text" className="form-control" name={75} />
                      </div>
                      <div className="form-group ex smn">
                        <label>STO</label>
                        <span className="a">a</span>
                        <input type="text" className="form-control" name={76} />
                        <label>X</label>
                        <span className="b">b</span>
                        <input type="text" className="form-control" name={77} />
                        <input type="text" className="form-control" name={78} />
                        <span className="e">c</span>
                        <label>Long</label>
                      </div>
                      <br />
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Splitter Damper"
                            name={79}
                          />
                          <b>Splitter Damper</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="PR Damper"
                            name={79}
                          />
                          <b>PR Damper</b>
                        </label>
                      </div>
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input type="text" className="form-control" name={81} />
                        <label>J2</label>
                        <input type="text" className="form-control" name={82} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*1st form*/}
        <div className="body">
          <div className="container">
            <div className="row">
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div>
                      <h2>
                        <span>6</span> Return Air Boot{" "}
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/6.png"
                        alt=""
                      />
                      <br />
                      <br />
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="TURNING VANE OPTION"
                          name={83}
                        />
                        <b>TURNING VANE OPTION</b>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={84}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={84}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input type="text" className="form-control" name={85} />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input type="text" className="form-control" name={86} />
                      </div>
                      <div className="form-group">
                        <label>Only if B &amp; D different:</label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FLS" name={87} />
                          <b>FLS</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FRS" name={87} />
                          <b>FRS</b>
                        </label>
                        <br />
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="O/C" name={87} />
                          <b>O/C</b>
                        </label>
                      </div>
                      <div className="form-group yj bs">
                        <label>RAB</label>
                        <span className="a">a</span>
                        <input type="text" className="form-control" name={90} />
                        <label>X</label>
                        <span className="b">b</span>
                        <input type="text" className="form-control" name={91} />
                        <label>to</label>
                        <input type="text" className="form-control" name={92} />
                        <span className="e">c</span>
                        <label>X</label>
                        <span className="z">D</span>
                        <input type="text" className="form-control" name={93} />
                        <label>O/C</label>
                      </div>
                      <br />
                      <br />
                      <div className="form-group ex fd">
                        <label>with</label>
                        <span className="a">E</span>
                        <input type="text" className="form-control" name={94} />
                        <label>X</label>
                        <span className="b">F</span>
                        <input type="text" className="form-control" name={95} />
                        <label>SQ THR, or</label>
                        <input type="text" className="form-control" name={96} />
                        <span className="e">c</span>
                        <label>RD</label>
                      </div>
                      <div className="form-group">
                        <br />
                        <label>OR</label>
                        <span className="c">c</span>
                        <input type="text" className="form-control" name={97} />
                        <label>X</label>
                        <span className="d">c</span>
                        <input type="text" className="form-control" name={98} />
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="RAD HEEL"
                            name={99}
                          />
                          <b>RAD HEEL</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="SQ HEEL"
                            name={99}
                          />
                          <b>SQ HEEL</b>
                        </label>
                      </div>
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={100}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={101}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={102}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={102}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={103}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={104}
                        />
                      </div>
                      <div className="form-group">
                        <label>Only if B &amp; D different:</label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FLS"
                            name={105}
                          />
                          <b>FLS</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FRS"
                            name={105}
                          />
                          <b>FRS</b>
                        </label>
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="O/C"
                            name={105}
                          />
                          <b>O/C</b>
                        </label>
                      </div>
                      <div className="form-group yj bs">
                        <label>RAB</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={108}
                        />
                        <label>X</label>
                        <span className="b">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={109}
                        />
                        <label>to</label>
                        <input
                          type="text"
                          className="form-control"
                          name={110}
                        />
                        <span className="e">c</span>
                        <label>X</label>
                        <span className="z">D</span>
                        <input
                          type="text"
                          className="form-control"
                          name={111}
                        />
                        <label>O/C</label>
                      </div>
                      <br />
                      <br />
                      <div className="form-group ex fd">
                        <label>with</label>
                        <span className="a">E</span>
                        <input
                          type="text"
                          className="form-control"
                          name={112}
                        />
                        <label>X</label>
                        <span className="b">F</span>
                        <input
                          type="text"
                          className="form-control"
                          name={113}
                        />
                        <label>SQ THR, or</label>
                        <input
                          type="text"
                          className="form-control"
                          name={114}
                        />
                        <span className="e">c</span>
                        <label>RD</label>
                      </div>
                      <div className="form-group">
                        <br />
                        <label>OR</label>
                        <span className="c">c</span>
                        <input
                          type="text"
                          className="form-control"
                          name={115}
                        />
                        <label>X</label>
                        <span className="d">c</span>
                        <input
                          type="text"
                          className="form-control"
                          name={116}
                        />
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="RAD HEEL"
                            name={117}
                          />
                          <b>RAD HEEL</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="SQ HEEL"
                            name={117}
                          />
                          <b>SQ HEEL</b>
                        </label>
                      </div>
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={119}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={120}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div>
                      <h2>
                        <span>7</span> 3 Way
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/7.png"
                        alt=""
                      />
                      <br />
                      <br />
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="EVEN BACK"
                          name={121}
                        />
                        <b>EVEN BACK</b>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="UNEVEN BACK"
                          name={121}
                        />
                        <b>UNEVEN BACK</b>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={122}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={122}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={123}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={124}
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Indicate: Only if B is different from D <b>OR</b> F:
                        </label>
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FOT"
                            name={125}
                          />
                          <b>FOT</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FOB"
                            name={125}
                          />
                          <b>FOB</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="O/C"
                            name={125}
                          />
                          <b>O/C</b>
                        </label>
                      </div>
                      <div className="form-group ex chl">
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={126}
                        />
                        <label>X</label>
                        <span className="b">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={127}
                        />
                        <label>to</label>
                        <input
                          type="text"
                          className="form-control"
                          name={128}
                        />
                        <span className="e">c</span>
                        <label>X</label>
                        <span className="rgh">Left</span>
                        <input
                          type="text"
                          className="form-control"
                          name={129}
                        />
                        <span className="lo">D</span>
                        <label>to</label>
                        <input
                          type="text"
                          className="form-control"
                          name={130}
                        />
                        <span className="mo">E</span>
                        <label>X</label>
                        <span className="lft">Right</span>
                        <input
                          type="text"
                          className="form-control"
                          name={131}
                        />
                        <span className="bt">F</span>
                      </div>
                      <br />
                      <div className="form-group gu">
                        <br />
                        <label>with</label>
                        <span className="c">G</span>
                        <input
                          type="text"
                          className="form-control"
                          name={132}
                        />
                        <label>
                          Rd Thr <b>OR</b>
                        </label>
                        <span className="d">G</span>
                        <input
                          type="text"
                          className="form-control"
                          name={133}
                        />
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={134}
                        />
                        <span className="f">G</span>
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Splitter Damper"
                            name={135}
                          />
                          <b>Splitter Damper</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Push Rod Damper"
                            name={135}
                          />
                          <b>Push Rod Damper</b>
                        </label>
                      </div>
                      <div className="form-group jy">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={136}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={137}
                        />
                        <label>J3</label>
                        <input
                          type="text"
                          className="form-control"
                          name={138}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Dl half inch"
                            name={139}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="One inch"
                            name={139}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={141}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={142}
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Indicate: Only if B is different from D <b>OR</b> F:
                        </label>
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FOT"
                            name={143}
                          />
                          <b>FOT</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FOB"
                            name={143}
                          />
                          <b>FOB</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="O/C"
                            name={143}
                          />
                          <b>O/C</b>
                        </label>
                      </div>
                      <div className="form-group ex chl">
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={144}
                        />
                        <label>X</label>
                        <span className="b">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={145}
                        />
                        <label>to</label>
                        <input
                          type="text"
                          className="form-control"
                          name={146}
                        />
                        <span className="e">c</span>
                        <label>X</label>
                        <span className="rgh">Left</span>
                        <input
                          type="text"
                          className="form-control"
                          name={147}
                        />
                        <span className="lo">D</span>
                        <label>to</label>
                        <input
                          type="text"
                          className="form-control"
                          name={148}
                        />
                        <span className="mo">E</span>
                        <label>X</label>
                        <span className="lft">Right</span>
                        <input
                          type="text"
                          className="form-control"
                          name={149}
                        />
                        <span className="bt">F</span>
                      </div>
                      <br />
                      <div className="form-group gu">
                        <br />
                        <label>with</label>
                        <span className="c">G</span>
                        <input
                          type="text"
                          className="form-control"
                          name={150}
                        />
                        <label>
                          Rd Thr <b>OR</b>
                        </label>
                        <span className="d">G</span>
                        <input
                          type="text"
                          className="form-control"
                          name={151}
                        />
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={152}
                        />
                        <span className="f">G</span>
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Splitter Damper"
                            name={153}
                          />
                          <b>Splitter Damper</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Push Rod Damper"
                            name={153}
                          />
                          <b>Push Rod Damper</b>
                        </label>
                      </div>
                      <div className="form-group jy">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={154}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={155}
                        />
                        <label>J3</label>
                        <input
                          type="text"
                          className="form-control"
                          name={156}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div>
                      <h2>
                        <span>8</span> Y-Branch
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/8.png"
                        alt=""
                      />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={157}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={157}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={158}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={159}
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Indicate: Only if B is different from D <b>OR</b> F:
                        </label>
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FOT"
                            name={160}
                          />
                          <b>FOT</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FOB"
                            name={160}
                          />
                          <b>FOB</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="O/C"
                            name={160}
                          />
                          <b>O/C</b>
                        </label>
                      </div>
                      <div className="form-group ex chl ku">
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={161}
                        />
                        <label>X</label>
                        <span className="b">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={162}
                        />
                        <label>to</label>
                        <input
                          type="text"
                          className="form-control"
                          name={163}
                        />
                        <span className="e">c</span>
                        <label>X</label>
                        <span className="rgh">Straight</span>
                        <input
                          type="text"
                          className="form-control"
                          name={165}
                        />
                        <span className="lo">D</span>
                        <label>to</label>
                        <input
                          type="text"
                          className="form-control"
                          name={166}
                        />
                        <span className="mo">E</span>
                        <label>X</label>
                        <span className="lft">Right</span>
                        <input
                          type="text"
                          className="form-control"
                          name={167}
                        />
                        <span className="bt">F</span>
                      </div>
                      <br />
                      <div className="form-group gu">
                        <br />
                        <label>with</label>
                        <span className="c">H</span>
                        <input
                          type="text"
                          className="form-control"
                          name={168}
                        />
                        <label>
                          Rd Thr <b>OR</b>
                        </label>
                        <span className="d">H</span>
                        <input
                          type="text"
                          className="form-control"
                          name={169}
                        />
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={170}
                        />
                        <span className="f">H</span>
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Splitter Damper"
                            name={171}
                          />
                          <b>Splitter Damper</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Push Rod Damper"
                            name={171}
                          />
                          <b>Push Rod Damper</b>
                        </label>
                      </div>
                      <div className="form-group jy">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={172}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={173}
                        />
                        <label>J3</label>
                        <input
                          type="text"
                          className="form-control"
                          name={174}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={175}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={175}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={176}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={177}
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Indicate: Only if B is different from D <b>OR</b> F:
                        </label>
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FOT"
                            name={178}
                          />
                          <b>FOT</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FOB"
                            name={178}
                          />
                          <b>FOB</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="O/C"
                            name={178}
                          />
                          <b>O/C</b>
                        </label>
                      </div>
                      <div className="form-group ex chl ku">
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={179}
                        />
                        <label>X</label>
                        <span className="b">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={180}
                        />
                        <label>to</label>
                        <input
                          type="text"
                          className="form-control"
                          name={181}
                        />
                        <span className="e">c</span>
                        <label>X</label>
                        <span className="rgh">Straight</span>
                        <input
                          type="text"
                          className="form-control"
                          name={182}
                        />
                        <span className="lo">D</span>
                        <label>to</label>
                        <input
                          type="text"
                          className="form-control"
                          name={183}
                        />
                        <span className="mo">E</span>
                        <label>X</label>
                        <span className="lft">Right</span>
                        <input
                          type="text"
                          className="form-control"
                          name={184}
                        />
                        <span className="bt">F</span>
                      </div>
                      <br />
                      <div className="form-group gu">
                        <br />
                        <label>with</label>
                        <span className="c">H</span>
                        <input
                          type="text"
                          className="form-control"
                          name={185}
                        />
                        <label>
                          Rd Thr <b>OR</b>
                        </label>
                        <span className="d">H</span>
                        <input
                          type="text"
                          className="form-control"
                          name={186}
                        />
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={187}
                        />
                        <span className="f">H</span>
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Splitter Damper"
                            name={188}
                          />
                          <b>Splitter Damper</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Push Rod Damper"
                            name={188}
                          />
                          <b>Push Rod Damper</b>
                        </label>
                      </div>
                      <div className="form-group jy">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={190}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={191}
                        />
                        <label>J3</label>
                        <input
                          type="text"
                          className="form-control"
                          name={192}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div
                  className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                  style={{ borderRight: "5px solid #ccc" }}
                >
                  <div className="clearfix bdr">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="frm-in">
                          <div>
                            <h2>
                              <span>9</span> Transition{" "}
                            </h2>
                            <img
                              src="./Custom Order Request _ Air On_files/9.png"
                              alt=""
                            />
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="frm-in">
                          <div className="form-inline">
                            <h4>
                              <label className="checkbox-inline">
                                <input
                                  type="checkbox"
                                  defaultValue="DL half inch"
                                  name={193}
                                />
                                DL ½"
                              </label>
                              <label className="checkbox-inline">
                                <input
                                  type="checkbox"
                                  defaultValue="one inch"
                                  name={193}
                                />
                                1"
                              </label>
                            </h4>
                            <div className="form-group fck">
                              <label>Gauge</label>
                              <input
                                type="text"
                                className="form-control"
                                name={194}
                              />
                            </div>
                            <div className="form-group fck">
                              <label>Qty</label>
                              <input
                                type="text"
                                className="form-control"
                                name={195}
                              />
                            </div>
                            <div className="form-group ex kh">
                              <label>Trans</label>
                              <span className="a">a</span>
                              <input
                                type="text"
                                className="form-control"
                                name={196}
                              />
                              <label>X</label>
                              <span className="b">b</span>
                              <input
                                type="text"
                                className="form-control"
                                name={197}
                              />
                            </div>
                            <br />
                            <br />
                            <div className="form-group gr">
                              <label>to</label>
                              <span className="dh">C</span>
                              <input
                                type="text"
                                className="form-control"
                                name={198}
                              />
                              <span className="e">D</span>
                              <label>X</label>
                              <input
                                type="text"
                                className="form-control"
                                name={199}
                              />
                              <b>,</b>
                              <input
                                type="text"
                                className="form-control"
                                name={200}
                              />
                              <label>Long</label>
                              <span className="er">E</span>
                            </div>
                            <br />
                            <br />
                            <div className="form-group fck">
                              <label>ENDS J1</label>
                              <input
                                type="text"
                                className="form-control"
                                name={201}
                              />
                              <label>J2</label>
                              <input
                                type="text"
                                className="form-control"
                                name={202}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix bdr">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="pg">
                          <p>
                            Only if B and D are different <b>AND</b> A and C are
                            different, check one of the following:(If not see
                            Reducer)
                          </p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="FOB O/C"
                              name={203}
                            />
                            FOB O/C <br />
                            <br />{" "}
                            <img src="./Custom Order Request _ Air On_files/a.png" />
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="FLS O/C"
                              name={204}
                            />
                            FLS O/C <br /> A
                            <img src="./Custom Order Request _ Air On_files/b.png" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix bdr">
                    <div className="row">
                      <div className="text-center">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="FOT O/C"
                              name={205}
                            />
                            FOT O/C <br />
                            <br />{" "}
                            <img src="./Custom Order Request _ Air On_files/c.png" />
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="FOT FRS"
                              name={206}
                            />
                            FOT FRS <br /> <br />
                            <img src="./Custom Order Request _ Air On_files/d.png" />
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="O/C BW"
                              name={207}
                            />
                            O/C BW
                            <br />
                            <br />{" "}
                            <img src="./Custom Order Request _ Air On_files/e.png" />
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="FRC O/C"
                              name={208}
                            />
                            FRC O/C <br /> <br />
                            <img src="./Custom Order Request _ Air On_files/f.png" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix bdr">
                    <div className="row">
                      <div className="text-center">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="FOT FLS"
                              name={209}
                            />
                            FOT FLS <br />
                            <br />{" "}
                            <img src="./Custom Order Request _ Air On_files/g.png" />
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="FOB FLS"
                              name={210}
                            />
                            FOB FLS <br /> <br />
                            <img src="./Custom Order Request _ Air On_files/h.png" />
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="FOB FRS"
                              name={211}
                            />
                            FOB FRS
                            <br />
                            <br />{" "}
                            <img src="./Custom Order Request _ Air On_files/i.png" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="row frm-in">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <h2>
                        <span>10</span> TRansition (offset/rising)(No radius){" "}
                      </h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="frm-in">
                        <img
                          src="./Custom Order Request _ Air On_files/10.png"
                          alt=""
                        />
                        <br />
                        <br />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="frm-in">
                        <div className="form-inline">
                          <h4>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DL half inch"
                                name={212}
                              />
                              DL ½"
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="one inch"
                                name={212}
                              />
                              1"
                            </label>
                          </h4>
                          <div className="form-group fck">
                            <label>Qty</label>
                            <input
                              type="text"
                              className="form-control"
                              name={214}
                            />
                          </div>
                          <div className="form-group ex kh">
                            <label>Trans</label>
                            <span className="a">a</span>
                            <input
                              type="text"
                              className="form-control"
                              name={215}
                            />
                            <label>X</label>
                            <span className="b">b</span>
                            <input
                              type="text"
                              className="form-control"
                              name={216}
                            />
                          </div>
                          <br />
                          <br />
                          <div className="form-group gr">
                            <label>to</label>
                            <span className="dh">C</span>
                            <input
                              type="text"
                              className="form-control"
                              name={217}
                            />
                            <span className="e">D</span>
                            <label>X</label>
                            <input
                              type="text"
                              className="form-control"
                              name={218}
                            />
                            <b>,</b>
                            <input
                              type="text"
                              className="form-control"
                              name={219}
                            />
                            <label>Long</label>
                            <span className="er">E</span>
                          </div>
                          <br />
                          <br />
                          <div className="form-group fck">
                            <label>Rise:</label>
                            <input
                              type="text"
                              className="form-control"
                              name={220}
                            />
                            <label>Offset:</label>
                            <input
                              type="text"
                              className="form-control"
                              name={221}
                            />
                            <label>ENDS J1</label>
                            <input
                              type="text"
                              className="form-control"
                              name={222}
                            />
                            <label>J2</label>
                            <input
                              type="text"
                              className="form-control"
                              name={223}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                        style={{ borderRight: "2px solid #333" }}
                      >
                        <div className="form-group">
                          <label>
                            <b>RISE (Check One &amp; Select Rise)</b>
                          </label>
                          <label className="checkbox-inline posab">
                            <input
                              type="checkbox"
                              defaultValue="Top rise"
                              name={225}
                            />
                          </label>
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="rise"
                              name={224}
                            />
                            <img src="./Custom Order Request _ Air On_files/j.png" />
                          </label>
                          <label className="checkbox-inline posab2">
                            <input
                              type="checkbox"
                              defaultValue="Bottom rise"
                              name={225}
                            />
                          </label>
                        </div>
                        <div className="form-group">
                          <label className="checkbox-inline posab3">
                            <input
                              type="checkbox"
                              defaultValue="top drop"
                              name={227}
                            />
                          </label>
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="Drop"
                              name={226}
                            />
                            <img src="./Custom Order Request _ Air On_files/k.png" />
                          </label>
                          <label className="checkbox-inline posab4">
                            <input
                              type="checkbox"
                              defaultValue="bottom drop"
                              name={227}
                            />
                          </label>
                        </div>
                        <p>
                          <b>Note: B + Top Rise = D + Bottom RIse</b>
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label>
                          <b>Offset (Check One &amp; Select Offset)</b>
                        </label>
                        <div className="form-group">
                          <label className="checkbox-inline posab5">
                            <input
                              type="checkbox"
                              defaultValue="ll-off"
                              name={229}
                            />
                          </label>
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="rise"
                              name={228}
                            />
                            <img src="./Custom Order Request _ Air On_files/l.png" />
                          </label>
                          <label className="checkbox-inline posab6">
                            <input
                              type="checkbox"
                              defaultValue="rl-offset"
                              name={229}
                            />
                          </label>
                        </div>
                        <div className="form-group">
                          <label className="checkbox-inline posab7">
                            <input
                              type="checkbox"
                              defaultValue="lr-offset"
                              name={231}
                            />
                          </label>
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="drop"
                              name={230}
                            />
                            <img src="./Custom Order Request _ Air On_files/m.png" />
                          </label>
                          <label className="checkbox-inline posab8">
                            <input
                              type="checkbox"
                              defaultValue="rr-off"
                              name={231}
                            />
                          </label>
                        </div>
                        <p>
                          <b>Note: A + Off = C + Off</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*2nd form*/}
        <div className="body">
          <div className="container">
            <div className="row">
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h2>
                        <span>11</span> Box Pelnum/Drain pan{" "}
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/n.png"
                        alt=""
                      />
                      <br />
                      <br />
                      <div className="form-group">
                        <label>Metal Type</label>
                        <input
                          type="text"
                          className="form-control"
                          name={232}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={233}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={233}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={234}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={235}
                        />
                      </div>
                      <div className="form-group">
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="1/2 DFO"
                            name={236}
                          />
                          <b>1/2" DFO</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FO" name={236} />
                          <b>FO</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FI" name={236} />
                          <b>FI</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="RAW"
                            name={236}
                          />
                          <b>RAW</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="S&D"
                            name={236}
                          />
                          <b>S&amp;D</b>
                        </label>
                      </div>
                      <div className="form-group gr">
                        <label>to</label>
                        <span className="dh">A</span>
                        <input
                          type="text"
                          className="form-control"
                          name={237}
                        />
                        <span className="e">B</span>
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={238}
                        />
                        <b>,</b>
                        <input
                          type="text"
                          className="form-control"
                          name={239}
                        />
                        <label>High</label>
                        <span className="er">C</span>
                      </div>
                      <br />
                      <br />
                      <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                          <h4>Pan</h4>
                          <div className="form-group">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Solder"
                                name={240}
                              />
                              <b>Solder</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Silicone"
                                name={240}
                              />
                              <b>Silicone</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Safety Edge"
                                name={240}
                              />
                              <b>Safety Edge</b>
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-8 col-xs-12">
                          <h4>Drain Option</h4>
                          <div className="form-group">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="1/2"
                                name={241}
                              />
                              <b>1/2"</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="3/4"
                                name={241}
                              />
                              <b>3/4"</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Spot Weld"
                                name={241}
                              />
                              <b>Spot Weld</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Not Sealed"
                                name={241}
                              />
                              <b>Not Sealed</b>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Dl half inch"
                            name={242}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="One inch"
                            name={242}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={243}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={244}
                        />
                      </div>
                      <div className="form-group">
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="1/2 DFO"
                            name={245}
                          />
                          <b>1/2" DFO</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FO" name={245} />
                          <b>FO</b>
                        </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" defaultValue="FI" name={245} />
                          <b>FI</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="RAW"
                            name={245}
                          />
                          <b>RAW</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="S&D"
                            name={245}
                          />
                          <b>S&amp;D</b>
                        </label>
                      </div>
                      <div className="form-group gr">
                        <label>to</label>
                        <span className="dh">A</span>
                        <input
                          type="text"
                          className="form-control"
                          name={246}
                        />
                        <span className="e">B</span>
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={247}
                        />
                        <b>,</b>
                        <input
                          type="text"
                          className="form-control"
                          name={248}
                        />
                        <label>High</label>
                        <span className="er">C</span>
                      </div>
                      <br />
                      <br />
                      <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                          <h4>Pan</h4>
                          <div className="form-group">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Solder"
                                name={249}
                              />
                              <b>Solder</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Silicone"
                                name={249}
                              />
                              <b>Silicone</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Safety Edge"
                                name={249}
                              />
                              <b>Safety Edge</b>
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-8 col-xs-12">
                          <h4>Drain Option</h4>
                          <div className="form-group">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="1/2"
                                name={250}
                              />
                              <b>1/2"</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="3/4"
                                name={250}
                              />
                              <b>3/4"</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Spot Weld"
                                name={250}
                              />
                              <b>Spot Weld</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Not Sealed"
                                name={250}
                              />
                              <b>Not Sealed</b>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <h2>
                      <span>12</span> plenum Elbow
                    </h2>
                    <img
                      src="./Custom Order Request _ Air On_files/o.png"
                      alt=""
                    />
                    <br />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={251}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={251}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={252}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={253}
                        />
                      </div>
                      <div className="form-group">
                        <label>Indicate: Only if B and D are different:</label>
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FLS"
                            name={254}
                          />
                          <b>FLS</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FRS"
                            name={254}
                          />
                          <b>FRS</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="O/C"
                            name={254}
                          />
                          <b>O/C</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Sq Heel"
                            name={254}
                          />
                          <b>Sq Heel</b>
                        </label>
                      </div>
                      <div className="form-group ex chl su">
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={255}
                        />
                        <label>X</label>
                        <span className="b">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={256}
                        />
                        <label>(to</label>
                        <input
                          type="text"
                          className="form-control"
                          name={257}
                        />
                        <span className="e">c</span>
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={258}
                        />
                        <span className="lo">D</span>
                        <label>)</label>
                        <span className="mo">E</span>
                        <input
                          type="text"
                          className="form-control"
                          name={259}
                        />
                      </div>
                      <br />
                      <div className="form-group gu">
                        <br />
                        <label>with</label>
                        <span className="c">F</span>
                        <input
                          type="text"
                          className="form-control"
                          name={260}
                        />
                        <label>
                          Rd Thr <b>OR</b>
                        </label>
                        <span className="d">F</span>
                        <input
                          type="text"
                          className="form-control"
                          name={261}
                        />
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={262}
                        />
                        <span className="f">F</span>
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Splitter Damper"
                            name={263}
                          />
                          <b>Splitter Damper</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Push Rod Damper"
                            name={263}
                          />
                          <b>Push Rod Damper</b>
                        </label>
                      </div>
                      <div className="form-group jy">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={264}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={265}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="dl half inch"
                            name={266}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={266}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={268}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={269}
                        />
                      </div>
                      <div className="form-group">
                        <label>Indicate: Only if B and D are different:</label>
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FLS"
                            name={270}
                          />
                          <b>FLS</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="FRS"
                            name={270}
                          />
                          <b>FRS</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="O/C"
                            name={270}
                          />
                          <b>O/C</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Sq Heel"
                            name={270}
                          />
                          <b>Sq Heel</b>
                        </label>
                      </div>
                      <div className="form-group ex chl su">
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={271}
                        />
                        <label>X</label>
                        <span className="b">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={272}
                        />
                        <label>(to</label>
                        <input
                          type="text"
                          className="form-control"
                          name={273}
                        />
                        <span className="e">c</span>
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={274}
                        />
                        <span className="lo">D</span>
                        <label>)</label>
                        <span className="mo">E</span>
                        <input
                          type="text"
                          className="form-control"
                          name={275}
                        />
                      </div>
                      <br />
                      <div className="form-group gu">
                        <br />
                        <label>with</label>
                        <span className="c">F</span>
                        <input
                          type="text"
                          className="form-control"
                          name={276}
                        />
                        <label>
                          Rd Thr <b>OR</b>
                        </label>
                        <span className="d">F</span>
                        <input
                          type="text"
                          className="form-control"
                          name={277}
                        />
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={278}
                        />
                        <span className="f">F</span>
                        <label>Sq Thr</label>
                      </div>
                      <div className="clearfix" />
                      <div className="form-group">
                        <br />
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Splitter Damper"
                            name={279}
                          />
                          <b>Splitter Damper</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Push Rod Damper"
                            name={279}
                          />
                          <b>Push Rod Damper</b>
                        </label>
                      </div>
                      <div className="form-group jy">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={280}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={281}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="frm-in">
                    <div>
                      <h2>
                        <span>13</span> plenum take-off
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Flat on
                        top)
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/p.png"
                        alt=""
                      />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="frm-in">
                        <div className="form-inline">
                          <h3>
                            Variation 1:{" "}
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DL half inch"
                                name={282}
                              />
                              DL ½"
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="one inch"
                                name={282}
                              />
                              1"
                            </label>
                          </h3>
                          <div className="form-group">
                            <label>Gauge</label>
                            <input
                              type="text"
                              className="form-control"
                              name={283}
                            />
                          </div>
                          <div className="form-group">
                            <label>Qty</label>
                            <input
                              type="text"
                              className="form-control"
                              name={284}
                            />
                          </div>
                          <div className="form-group">
                            <label>
                              Indicate: Only if B and D are diffrent:
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FLS"
                                name={285}
                              />
                              <b>FLS</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FRS"
                                name={285}
                              />
                              <b>FRS</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="O/C"
                                name={285}
                              />
                              <b>O/C</b>
                            </label>
                          </div>
                          <div className="form-group">
                            <label>To fit which side of plenum:</label>
                            <input
                              type="text"
                              className="form-control"
                              name={286}
                            />
                          </div>
                          <div className="form-group ex chl ku bi">
                            <label>PTO</label>
                            <span className="a">a</span>
                            <input
                              type="text"
                              className="form-control"
                              name={287}
                            />
                            <label>X</label>
                            <span className="b">b</span>
                            <input
                              type="text"
                              className="form-control"
                              name={288}
                            />
                            <label>(to</label>
                            <input
                              type="text"
                              className="form-control"
                              name={289}
                            />
                            <span className="e">c</span>
                            <label>X</label>
                            <input
                              type="text"
                              className="form-control"
                              name={290}
                            />
                            <span className="lo">D</span>
                            <label>)</label>
                            <label>FOT,</label>
                            <input
                              type="text"
                              className="form-control"
                              name={291}
                            />
                            <span className="mo">E</span>
                            <label>Long</label>
                          </div>
                          <br />
                          <div className="form-group vlm">
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="PR Damper"
                                name={292}
                              />
                              <b>PR Damper</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Volume Damper Size"
                                name={292}
                              />
                              <b>Volume Damper Size</b>
                              <span className="vl">G</span>{" "}
                              <input
                                type="text"
                                className="form-control"
                                name={604}
                              />
                            </label>
                            <label>Location</label>
                            <span className="dm">G</span>
                            <input
                              type="text"
                              className="form-control"
                              name={293}
                            />
                          </div>
                          <br />
                          <br />
                          <div className="form-group jy">
                            <label>ENDS J1</label>
                            <input
                              type="text"
                              className="form-control"
                              name={294}
                            />
                            <label>J2</label>
                            <input
                              type="text"
                              className="form-control"
                              name={295}
                            />
                            <label>J3</label>
                            <input
                              type="text"
                              className="form-control"
                              name={296}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="frm-in">
                        <div className="form-inline">
                          <h3>
                            Variation 2:{" "}
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DL half inch"
                                name={297}
                              />
                              DL ½"
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="one inch"
                                name={297}
                              />
                              1"
                            </label>
                          </h3>
                          <div className="form-group">
                            <label>Gauge</label>
                            <input
                              type="text"
                              className="form-control"
                              name={298}
                            />
                          </div>
                          <div className="form-group">
                            <label>Qty</label>
                            <input
                              type="text"
                              className="form-control"
                              name={299}
                            />
                          </div>
                          <div className="form-group">
                            <label>
                              Indicate: Only if B and D are diffrent:
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FLS"
                                name={300}
                              />
                              <b>FLS</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FRS"
                                name={300}
                              />
                              <b>FRS</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="O/C"
                                name={300}
                              />
                              <b>O/C</b>
                            </label>
                          </div>
                          <div className="form-group">
                            <label>To fit which side of plenum:</label>
                            <input
                              type="text"
                              className="form-control"
                              name={301}
                            />
                          </div>
                          <div className="form-group ex chl ku bi">
                            <label>PTO</label>
                            <span className="a">a</span>
                            <input
                              type="text"
                              className="form-control"
                              name={302}
                            />
                            <label>X</label>
                            <span className="b">b</span>
                            <input
                              type="text"
                              className="form-control"
                              name={303}
                            />
                            <label>(to</label>
                            <input
                              type="text"
                              className="form-control"
                              name={304}
                            />
                            <span className="e">c</span>
                            <label>X</label>
                            <input
                              type="text"
                              className="form-control"
                              name={305}
                            />
                            <span className="lo">D</span>
                            <label>)</label>
                            <label>FOT,</label>
                            <input
                              type="text"
                              className="form-control"
                              name={306}
                            />
                            <span className="mo">E</span>
                            <label>Long</label>
                          </div>
                          <br />
                          <div className="form-group vlm">
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="PR Damper"
                                name={307}
                              />
                              <b>PR Damper</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Volume Damper Size"
                                name={307}
                              />
                              <b>Volume Damper Size</b>
                              <span className="vl">G</span>{" "}
                              <input
                                type="text"
                                className="form-control"
                                name={606}
                              />
                            </label>
                            <label>Location</label>
                            <span className="dm">G</span>
                            <input
                              type="text"
                              className="form-control"
                              name={308}
                            />
                          </div>
                          <br />
                          <br />
                          <div className="form-group jy">
                            <label>ENDS J1</label>
                            <input
                              type="text"
                              className="form-control"
                              name={309}
                            />
                            <label>J2</label>
                            <input
                              type="text"
                              className="form-control"
                              name={310}
                            />
                            <label>J3</label>
                            <input
                              type="text"
                              className="form-control"
                              name={311}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="frm-in">
                    <div>
                      <h2>
                        <span>14</span> plenum take-off
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(with
                        rise)
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/q.png"
                        alt=""
                      />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="frm-in">
                        <div className="form-inline">
                          <h3>
                            Variation 1:{" "}
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DL half inch"
                                name={312}
                              />
                              DL ½"
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="one inch"
                                name={312}
                              />
                              1"
                            </label>
                          </h3>
                          <div className="form-group">
                            <label>Gauge</label>
                            <input
                              type="text"
                              className="form-control"
                              name={314}
                            />
                          </div>
                          <div className="form-group">
                            <label>Qty</label>
                            <input
                              type="text"
                              className="form-control"
                              name={315}
                            />
                          </div>
                          <div className="form-group">
                            <label>
                              Indicate: Look F.L.C. Only if B and D are
                              diffrent:
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FLS"
                                name={316}
                              />
                              <b>FLS</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FRS"
                                name={316}
                              />
                              <b>FRS</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="O/C"
                                name={316}
                              />
                              <b>O/C</b>
                            </label>
                          </div>
                          <div className="form-group">
                            <label>To fit which side of plenum:</label>
                            <input
                              type="text"
                              className="form-control"
                              name={317}
                            />
                          </div>
                          <div className="form-group ex chl ku bi gi">
                            <label>PTO</label>
                            <span className="a">a</span>
                            <input
                              type="text"
                              className="form-control"
                              name={318}
                            />
                            <label>X</label>
                            <span className="b">b</span>
                            <input
                              type="text"
                              className="form-control"
                              name={319}
                            />
                            <label>(to</label>
                            <input
                              type="text"
                              className="form-control"
                              name={320}
                            />
                            <span className="e">c</span>
                            <label>X</label>
                            <input
                              type="text"
                              className="form-control"
                              name={321}
                            />
                            <span className="lo">D</span>
                            <label>),</label>
                            <input
                              type="text"
                              className="form-control"
                              name={322}
                            />
                            <span className="mon">E(Long)</span>
                            <label>,</label>
                            <input
                              type="text"
                              className="form-control"
                              name={323}
                            />
                            <span className="om">F(Rise)</span>
                          </div>
                          <br />
                          <div className="form-group vlm">
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="PR Damper"
                                name={324}
                              />
                              <b>PR Damper</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Volume Damper Size"
                                name={325}
                              />
                              <b>Volume Damper Size</b>
                              <span className="vl">G</span>{" "}
                              <input
                                type="text"
                                className="form-control"
                                name={326}
                              />
                            </label>
                            <label>Location</label>
                            <span className="dm">G</span>
                            <input
                              type="text"
                              className="form-control"
                              name={327}
                            />
                          </div>
                          <br />
                          <br />
                          <div className="form-group jy">
                            <label>ENDS J1</label>
                            <input
                              type="text"
                              className="form-control"
                              name={328}
                            />
                            <label>J2</label>
                            <input
                              type="text"
                              className="form-control"
                              name={329}
                            />
                            <label>J3</label>
                            <input
                              type="text"
                              className="form-control"
                              name={330}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="frm-in">
                        <div className="form-inline">
                          <h3>
                            Variation 2:{" "}
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DL half inch"
                                name={331}
                              />
                              DL ½"
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="one inch"
                                name={331}
                              />
                              1"
                            </label>
                          </h3>
                          <div className="form-group">
                            <label>Gauge</label>
                            <input
                              type="text"
                              className="form-control"
                              name={333}
                            />
                          </div>
                          <div className="form-group">
                            <label>Qty</label>
                            <input
                              type="text"
                              className="form-control"
                              name={334}
                            />
                          </div>
                          <div className="form-group">
                            <label>
                              Indicate: Look F.L.C. Only if B and D are
                              diffrent:
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FLS"
                                name={335}
                              />
                              <b>FLS</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FRS"
                                name={335}
                              />
                              <b>FRS</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="O/C"
                                name={335}
                              />
                              <b>O/C</b>
                            </label>
                          </div>
                          <div className="form-group">
                            <label>To fit which side of plenum:</label>
                            <input
                              type="text"
                              className="form-control"
                              name={336}
                            />
                          </div>
                          <div className="form-group ex chl ku bi gi">
                            <label>PTO</label>
                            <span className="a">a</span>
                            <input
                              type="text"
                              className="form-control"
                              name={337}
                            />
                            <label>X</label>
                            <span className="b">b</span>
                            <input
                              type="text"
                              className="form-control"
                              name={338}
                            />
                            <label>(to</label>
                            <input
                              type="text"
                              className="form-control"
                              name={339}
                            />
                            <span className="e">c</span>
                            <label>X</label>
                            <input
                              type="text"
                              className="form-control"
                              name={340}
                            />
                            <span className="lo">D</span>
                            <label>),</label>
                            <input
                              type="text"
                              className="form-control"
                              name={341}
                            />
                            <span className="mon">E(Long)</span>
                            <label>,</label>
                            <input
                              type="text"
                              className="form-control"
                              name={342}
                            />
                            <span className="om">F(Rise)</span>
                          </div>
                          <br />
                          <div className="form-group vlm">
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="PR Damper"
                                name={343}
                              />
                              <b>PR Damper</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Volume Damper Size"
                                name={344}
                              />
                              <b>Volume Damper Size</b>
                              <span className="vl">G</span>{" "}
                              <input
                                type="text"
                                className="form-control"
                                name={345}
                              />
                            </label>
                            <label>Location</label>
                            <span className="dm">G</span>
                            <input
                              type="text"
                              className="form-control"
                              name={346}
                            />
                          </div>
                          <br />
                          <br />
                          <div className="form-group jy">
                            <label>ENDS J1</label>
                            <input
                              type="text"
                              className="form-control"
                              name={347}
                            />
                            <label>J2</label>
                            <input
                              type="text"
                              className="form-control"
                              name={607}
                            />
                            <label>J3</label>
                            <input
                              type="text"
                              className="form-control"
                              name={348}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="frm-in">
                    <h2>
                      <span>15</span> Fish Lock Collar{" "}
                    </h2>
                    <img
                      src="./Custom Order Request _ Air On_files/r.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="frm-in sm">
                    <div className="form-inline">
                      <h3>
                        Variation1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={349}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={349}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={350}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={351}
                        />
                      </div>
                      <div className="form-group ex smn">
                        <label>FLC</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={352}
                        />
                        <label>X</label>
                        <span className="chut">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={353}
                        />
                        <label>,</label>
                        <input
                          type="text"
                          className="form-control"
                          name={354}
                        />
                        <span className="e">c</span>
                        <label>Long</label>
                      </div>
                      <br />
                      <br />
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={355}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={608}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="frm-in sm">
                    <div className="form-inline">
                      <h3>
                        Variation 2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Dl half inch"
                            name={356}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="One inch"
                            name={356}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={357}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={358}
                        />
                      </div>
                      <div className="form-group ex smn">
                        <label>FLC</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={359}
                        />
                        <label>X</label>
                        <span className="chut">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={360}
                        />
                        <label>,</label>
                        <input
                          type="text"
                          className="form-control"
                          name={361}
                        />
                        <span className="e">c</span>
                        <label>Long</label>
                      </div>
                      <br />
                      <br />
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={362}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={363}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="frm-in sm">
                    <div className="form-inline">
                      <h3>
                        Variation 3:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={364}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={364}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={365}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={366}
                        />
                      </div>
                      <div className="form-group ex smn">
                        <label>FLC</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={367}
                        />
                        <label>X</label>
                        <span className="chut">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={368}
                        />
                        <label>,</label>
                        <input
                          type="text"
                          className="form-control"
                          name={369}
                        />
                        <span className="e">c</span>
                        <label>Long</label>
                      </div>
                      <br />
                      <br />
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={370}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={371}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                  <div className="frm-in">
                    <h2>
                      <span>16</span> Straight
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duct{" "}
                    </h2>
                    <img
                      src="./Custom Order Request _ Air On_files/s.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="frm-in sm smm">
                        <div className="form-inline">
                          <h3>
                            Variation 1:{" "}
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DL half inch"
                                name={372}
                              />
                              DL ½"
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="one inch"
                                name={372}
                              />
                              1"
                            </label>
                          </h3>
                          <div className="form-group">
                            <label>Gauge</label>
                            <input
                              type="text"
                              className="form-control"
                              name={373}
                            />
                          </div>
                          <div className="form-group">
                            <label>Qty</label>
                            <input
                              type="text"
                              className="form-control"
                              name={374}
                            />
                          </div>
                          <div className="form-group ex smn">
                            <span className="a">a</span>
                            <input
                              type="text"
                              className="form-control"
                              name={375}
                            />
                            <span className="chut">b</span>
                            <input
                              type="text"
                              className="form-control"
                              name={376}
                            />
                            <span className="e">c</span>
                            <input
                              type="text"
                              className="form-control"
                              name={377}
                            />
                          </div>
                          <br />
                          <br />
                          <div className="form-group">
                            <label>Ends</label> <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="RAW"
                                name={378}
                              />
                              <b>RAW</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="S&D"
                                name={378}
                              />
                              <b>S&amp;D</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DFO"
                                name={378}
                              />
                              <b>DFO</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FO"
                                name={378}
                              />
                              <b>FO</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FI"
                                name={378}
                              />
                              <b>FI</b>
                            </label>
                          </div>
                          <div className="form-group cl">
                            <label>Block End A</label>
                            <input
                              type="text"
                              className="form-control"
                              name={379}
                            />
                            <label>B</label>
                            <input
                              type="text"
                              className="form-control"
                              name={380}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="frm-in sm smm">
                        <div className="form-inline">
                          <h3>
                            Variation 2:{" "}
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DL Half Inch"
                                name={381}
                              />
                              DL ½"
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="one inch"
                                name={381}
                              />
                              1"
                            </label>
                          </h3>
                          <div className="form-group">
                            <label>Gauge</label>
                            <input
                              type="text"
                              className="form-control"
                              name={382}
                            />
                          </div>
                          <div className="form-group">
                            <label>Qty</label>
                            <input
                              type="text"
                              className="form-control"
                              name={383}
                            />
                          </div>
                          <div className="form-group ex smn">
                            <span className="a">a</span>
                            <input
                              type="text"
                              className="form-control"
                              name={384}
                            />
                            <span className="chut">b</span>
                            <input
                              type="text"
                              className="form-control"
                              name={385}
                            />
                            <span className="e">c</span>
                            <input
                              type="text"
                              className="form-control"
                              name={386}
                            />
                          </div>
                          <br />
                          <br />
                          <div className="form-group">
                            <label>Ends</label> <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="RAW"
                                name={387}
                              />
                              <b>RAW</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="S&D"
                                name={387}
                              />
                              <b>S&amp;D</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DFO"
                                name={387}
                              />
                              <b>DFO</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FO"
                                name={387}
                              />
                              <b>FO</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FI"
                                name={387}
                              />
                              <b>FI</b>
                            </label>
                          </div>
                          <div className="form-group cl">
                            <label>Block End A</label>
                            <input
                              type="text"
                              className="form-control"
                              name={388}
                            />
                            <label>B</label>
                            <input
                              type="text"
                              className="form-control"
                              name={389}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="frm-in sm smm">
                        <div className="form-inline">
                          <h3>
                            Variation 3:{" "}
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DL half inch"
                                name={390}
                              />
                              DL ½"
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="one inch"
                                name={390}
                              />
                              1"
                            </label>
                          </h3>
                          <div className="form-group">
                            <label>Gauge</label>
                            <input
                              type="text"
                              className="form-control"
                              name={391}
                            />
                          </div>
                          <div className="form-group">
                            <label>Qty</label>
                            <input
                              type="text"
                              className="form-control"
                              name={392}
                            />
                          </div>
                          <div className="form-group ex smn">
                            <span className="a">a</span>
                            <input
                              type="text"
                              className="form-control"
                              name={393}
                            />
                            <span className="chut">b</span>
                            <input
                              type="text"
                              className="form-control"
                              name={394}
                            />
                            <span className="e">c</span>
                            <input
                              type="text"
                              className="form-control"
                              name={395}
                            />
                          </div>
                          <br />
                          <br />
                          <div className="form-group">
                            <label>Ends</label> <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="RAW"
                                name={396}
                              />
                              <b>RAW</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="S&D"
                                name={396}
                              />
                              <b>S&amp;D</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DFO"
                                name={396}
                              />
                              <b>DFO</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FO"
                                name={396}
                              />
                              <b>FO</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FI"
                                name={396}
                              />
                              <b>FI</b>
                            </label>
                          </div>
                          <div className="form-group cl">
                            <label>Block End A</label>
                            <input
                              type="text"
                              className="form-control"
                              name={397}
                            />
                            <label>B</label>
                            <input
                              type="text"
                              className="form-control"
                              name={398}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="frm-in sm smm">
                        <div className="form-inline">
                          <h3>
                            Variation 4:{" "}
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DL half inch"
                                name={399}
                              />
                              DL ½"
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="One inch"
                                name={399}
                              />
                              1"
                            </label>
                          </h3>
                          <div className="form-group">
                            <label>Gauge</label>
                            <input
                              type="text"
                              className="form-control"
                              name={400}
                            />
                          </div>
                          <div className="form-group">
                            <label>Qty</label>
                            <input
                              type="text"
                              className="form-control"
                              name={401}
                            />
                          </div>
                          <div className="form-group ex smn">
                            <span className="a">a</span>
                            <input
                              type="text"
                              className="form-control"
                              name={402}
                            />
                            <span className="chut">b</span>
                            <input
                              type="text"
                              className="form-control"
                              name={403}
                            />
                            <span className="e">c</span>
                            <input
                              type="text"
                              className="form-control"
                              name={404}
                            />
                          </div>
                          <br />
                          <br />
                          <div className="form-group">
                            <label>Ends</label> <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="RAW"
                                name={405}
                              />
                              <b>RAW</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="S&D"
                                name={405}
                              />
                              <b>S&amp;D</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DFO"
                                name={405}
                              />
                              <b>DFO</b>
                            </label>
                            <br />
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FO"
                                name={405}
                              />
                              <b>FO</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FI"
                                name={405}
                              />
                              <b>FI</b>
                            </label>
                          </div>
                          <div className="form-group cl">
                            <label>Block End A</label>
                            <input
                              type="text"
                              className="form-control"
                              name={406}
                            />
                            <label>B</label>
                            <input
                              type="text"
                              className="form-control"
                              name={407}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*3rd form*/}
        <div className="body">
          <div className="container">
            <div className="row">
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div>
                      <h2>
                        <span>17</span> Offset
                      </h2>
                      <img
                        src="./Custom Order Request _ Air On_files/t.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in sm">
                    <div className="form-inline">
                      <h3>
                        Variation 1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={408}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={408}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={409}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={410}
                        />
                      </div>
                      <div className="form-group ex smn grn">
                        <label>Offset</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={411}
                        />
                        <label>X</label>
                        <span className="chut">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={412}
                        />
                        <label>,</label>
                        <input
                          type="text"
                          className="form-control"
                          name={413}
                        />
                        <span className="e">c</span>
                      </div>
                      <br />
                      <br />
                      <div className="form-group ex smn gl">
                        <label>Offset ,</label>
                        <span className="a">D</span>
                        <input
                          type="text"
                          className="form-control"
                          name={414}
                        />
                        <label>Long</label>
                      </div>
                      <br />
                      <br />
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={415}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={416}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in sm">
                    <div className="form-inline">
                      <h3>
                        Variation 2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={417}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={417}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={418}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={419}
                        />
                      </div>
                      <div className="form-group ex smn grn">
                        <label>Offset</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={420}
                        />
                        <label>X</label>
                        <span className="chut">b</span>
                        <input
                          type="text"
                          className="form-control"
                          name={421}
                        />
                        <label>,</label>
                        <input
                          type="text"
                          className="form-control"
                          name={422}
                        />
                        <span className="e">c</span>
                      </div>
                      <br />
                      <br />
                      <div className="form-group ex smn gl">
                        <label>Offset ,</label>
                        <span className="a">D</span>
                        <input
                          type="text"
                          className="form-control"
                          name={423}
                        />
                        <label>Long</label>
                      </div>
                      <br />
                      <br />
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={424}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={425}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <h2>
                      <span>18</span> Reducer
                    </h2>
                    <img
                      src="./Custom Order Request _ Air On_files/u.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="Dl half inch"
                            name={426}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={426}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={427}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={428}
                        />
                      </div>
                      <div className="form-group">
                        <br />
                        <label>Indicate:</label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="F1S"
                            name={429}
                          />
                          <b>F1S</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="O/C"
                            name={429}
                          />
                          <b>O/C</b>
                        </label>
                      </div>
                      <br />
                      <div className="form-group ex zz">
                        <label>RED</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={430}
                        />
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={431}
                        />
                        <span className="b">b</span>
                      </div>
                      <br /> <br />
                      <div className="form-group ex smn">
                        <label>TO</label>
                        <span className="a">D</span>
                        <input
                          type="text"
                          className="form-control"
                          name={432}
                        />
                        <label>X</label>
                        <span className="chut">B</span>
                        <input
                          type="text"
                          className="form-control"
                          name={433}
                        />
                        <label>,</label>
                        <input
                          type="text"
                          className="form-control"
                          name={434}
                        />
                        <span className="e">C</span>
                        <label>Long</label>
                      </div>
                      <div className="clearfix" />
                      <br />
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={435}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={436}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={437}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="One Inch"
                            name={437}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={438}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={439}
                        />
                      </div>
                      <div className="form-group">
                        <br />
                        <label>Indicate:</label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="F1S"
                            name={440}
                          />
                          <b>F1S</b>
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="O/C"
                            name={440}
                          />
                          <b>O/C</b>
                        </label>
                      </div>
                      <br />
                      <div className="form-group ex zz">
                        <label>RED</label>
                        <span className="a">a</span>
                        <input
                          type="text"
                          className="form-control"
                          name={442}
                        />
                        <label>X</label>
                        <input
                          type="text"
                          className="form-control"
                          name={443}
                        />
                        <span className="b">b</span>
                      </div>
                      <br /> <br />
                      <div className="form-group ex smn">
                        <label>TO</label>
                        <span className="a">D</span>
                        <input
                          type="text"
                          className="form-control"
                          name={444}
                        />
                        <label>X</label>
                        <span className="chut">B</span>
                        <input
                          type="text"
                          className="form-control"
                          name={445}
                        />
                        <label>,</label>
                        <input
                          type="text"
                          className="form-control"
                          name={446}
                        />
                        <span className="e">C</span>
                        <label>Long</label>
                      </div>
                      <div className="clearfix" />
                      <br />
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={447}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={448}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <h2>
                      <span>19</span> Riser
                    </h2>
                    <img
                      src="./Custom Order Request _ Air On_files/v.png"
                      alt=""
                    />
                    <br />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 1:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={449}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={449}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={450}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={451}
                        />
                      </div>
                      <br />
                      <div className="form-group ex smn">
                        <label>Riser</label>
                        <span className="a">A</span>
                        <input
                          type="text"
                          className="form-control"
                          name={452}
                        />
                        <label>X</label>
                        <span className="chut">B</span>
                        <input
                          type="text"
                          className="form-control"
                          name={453}
                        />
                        <label>,</label>
                        <input
                          type="text"
                          className="form-control"
                          name={454}
                        />
                        <span className="e">C</span>
                        <label>Rise,</label>
                      </div>
                      <br /> <br />
                      <div className="form-group ex xx">
                        <span className="a">D</span>
                        <input
                          type="text"
                          className="form-control"
                          name={455}
                        />
                        <label>Long</label>
                      </div>
                      <br />
                      <div className="clearfix" />
                      <br />
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={456}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={457}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="frm-in">
                    <div className="form-inline">
                      <h3>
                        Variation 2:{" "}
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="DL half inch"
                            name={458}
                          />
                          DL ½"
                        </label>
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            defaultValue="one inch"
                            name={458}
                          />
                          1"
                        </label>
                      </h3>
                      <div className="form-group">
                        <label>Gauge</label>
                        <input
                          type="text"
                          className="form-control"
                          name={460}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qty</label>
                        <input
                          type="text"
                          className="form-control"
                          name={461}
                        />
                      </div>
                      <br />
                      <div className="form-group ex smn">
                        <label>Riser</label>
                        <span className="a">A</span>
                        <input
                          type="text"
                          className="form-control"
                          name={462}
                        />
                        <label>X</label>
                        <span className="chut">B</span>
                        <input
                          type="text"
                          className="form-control"
                          name={463}
                        />
                        <label>,</label>
                        <input
                          type="text"
                          className="form-control"
                          name={464}
                        />
                        <span className="e">C</span>
                        <label>Rise,</label>
                      </div>
                      <br /> <br />
                      <div className="form-group ex xx">
                        <span className="a">D</span>
                        <input
                          type="text"
                          className="form-control"
                          name={465}
                        />
                        <label>Long</label>
                      </div>
                      <br />
                      <div className="clearfix" />
                      <br />
                      <div className="form-group">
                        <label>ENDS J1</label>
                        <input
                          type="text"
                          className="form-control"
                          name={466}
                        />
                        <label>J2</label>
                        <input
                          type="text"
                          className="form-control"
                          name={467}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix bcd">
                <div
                  className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                  style={{ borderRight: "5px solid #ccc" }}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="frm-in">
                        <h2>
                          <span>20</span> Offset/Riser-
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reducing
                        </h2>
                        <img
                          src="./Custom Order Request _ Air On_files/w.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="frm-in ">
                        <div className="form-inline">
                          <h3>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="DL half inch"
                                name={468}
                              />
                              DL ½"
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="one inch"
                                name={468}
                              />
                              1"
                            </label>
                          </h3>
                          <div className="form-group gd">
                            <label>Gauge</label>
                            <input
                              type="text"
                              className="form-control"
                              name={469}
                            />
                          </div>
                          <div className="form-group gd">
                            <label>Qty</label>
                            <input
                              type="text"
                              className="form-control"
                              name={470}
                            />
                          </div>
                          <div className="form-group ex chl su">
                            <span className="a">a</span>
                            <input
                              type="text"
                              className="form-control"
                              name={471}
                            />
                            <label>X</label>
                            <span className="b">b</span>
                            <input
                              type="text"
                              className="form-control"
                              name={472}
                            />
                            <label>to</label>
                            <input
                              type="text"
                              className="form-control"
                              name={670}
                            />
                            <span className="e">c</span>
                            <label>X</label>
                            <input
                              type="text"
                              className="form-control"
                              name={473}
                            />
                            <span className="lo">D</span>
                            <label>,</label>
                          </div>
                          <br />
                          <br />
                          <div className="form-group ff">
                            <span className="mo">E</span>
                            <input
                              type="text"
                              className="form-control"
                              name={474}
                            />
                            <label>Long</label>
                          </div>
                          <div className="form-group gd">
                            <br />
                            <label>ENDS J1</label>
                            <input
                              type="text"
                              className="form-control"
                              name={475}
                            />
                            <label>J2</label>
                            <input
                              type="text"
                              className="form-control"
                              name={476}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="frm-in ">
                        <div className="form-inline">
                          <div className="form-group gd">
                            <label>TOP VIEW:</label>
                            <br />
                            (Check One &amp;
                            <br /> Select Offset)
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="L-R offset"
                                name={477}
                              />
                              <img src="./Custom Order Request _ Air On_files/y.png" />
                            </label>
                          </div>
                          <div className="form-group gd">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="R-L offset"
                                name={478}
                              />
                              <img src="./Custom Order Request _ Air On_files/z.png" />
                            </label>
                            <br />
                            <br />
                            <label>Indicate Offset Amount:</label>
                            <input
                              type="text"
                              className="form-control"
                              name={479}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                      style={{ borderLeft: "2px solid #000" }}
                    >
                      <div className="frm-in">
                        <div className="form-inline">
                          <div className="form-group gd">
                            <label>Right SIDE:</label>
                            <br />
                            (Check One &amp;
                            <br /> Select Drop or Rise)
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="drop top"
                                name={480}
                              />
                              <img src="./Custom Order Request _ Air On_files/11.png" />
                            </label>
                          </div>
                          <div className="form-group gd">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Rise Bottom"
                                name={481}
                              />
                              <img src="./Custom Order Request _ Air On_files/12.png" />
                            </label>
                            <br />
                            <br />
                            <label>
                              Indicate
                              <br /> Drop or Rise Amount:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name={482}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="frm-in">
                        <h2>
                          <span>21</span> Reversing 90°
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="DL half inch"
                              name={483}
                            />
                            DL ½"
                          </label>
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              defaultValue="one inch"
                              name={483}
                            />
                            1"
                          </label>
                        </h2>
                        <img
                          src="./Custom Order Request _ Air On_files/x.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="frm-in ">
                        <div className="form-inline">
                          <div className="form-group gd">
                            <label>Gauge</label>
                            <input
                              type="text"
                              className="form-control"
                              name={484}
                            />
                          </div>
                          <div className="form-group gd">
                            <label>Qty</label>
                            <input
                              type="text"
                              className="form-control"
                              name={485}
                            />
                          </div>
                          <div className="form-group">
                            <br />
                            <label>Indicate:</label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Turning Up"
                                name={486}
                              />
                              <b>Turning Up</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="Turning Down"
                                name={486}
                              />
                              <b>Turning Down</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FLS"
                                name={486}
                              />
                              <b>FLS</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="FRS"
                                name={486}
                              />
                              <b>FRS</b>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                defaultValue="O/C"
                                name={486}
                              />
                              <b>O/C</b>
                            </label>
                          </div>
                          <div className="form-group ex zz">
                            <label>REV90</label>
                            <span className="a">a</span>
                            <input
                              type="text"
                              className="form-control"
                              name={487}
                            />
                            <label>X</label>
                            <input
                              type="text"
                              className="form-control"
                              name={488}
                            />
                            <span className="b">b</span>
                          </div>
                          <br />
                          <br />
                          <div className="form-group ex smn">
                            <label>to</label>
                            <span className="a">C</span>
                            <input
                              type="text"
                              className="form-control"
                              name={489}
                            />
                            <label>X</label>
                            <span className="chut">D</span>
                            <input
                              type="text"
                              className="form-control"
                              name={490}
                            />
                            <label>,</label>
                            <input
                              type="text"
                              className="form-control"
                              name={491}
                            />
                            <span className="e">E</span>
                            <label>Long</label>
                          </div>
                          <br />
                          <br />
                          <div className="form-group gd">
                            <br />
                            <label>ENDS J1</label>
                            <input
                              type="text"
                              className="form-control"
                              name={492}
                            />
                            <label>J2</label>
                            <input
                              type="text"
                              className="form-control"
                              name={493}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div style={{ borderTop: "5px solid #ccc" }}>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="frm-in">
                          <div className="form-inline">
                            <h2>
                              <span>22</span> Squre to Round
                            </h2>
                            <div className="form-group">
                              <label>ENDS J1</label>
                              <input
                                type="text"
                                className="form-control"
                                name={495}
                              />
                              <br />
                              <label>J2</label>
                              <input
                                type="text"
                                className="form-control"
                                name={496}
                              />
                            </div>
                            <img
                              src="./Custom Order Request _ Air On_files/13.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="frm-in ">
                          <div className="form-inline">
                            <h3>
                              <label className="checkbox-inline">
                                <input
                                  type="checkbox"
                                  defaultValue="DL half inch"
                                  name={497}
                                />
                                DL ½"
                              </label>
                              <label className="checkbox-inline">
                                <input
                                  type="checkbox"
                                  defaultValue="One inch"
                                  name={498}
                                />
                                1"
                              </label>
                            </h3>
                            <div className="form-group gd">
                              <label>Gauge</label>
                              <input
                                type="text"
                                className="form-control"
                                name={499}
                              />
                            </div>
                            <div className="form-group gd">
                              <label>Qty</label>
                              <input
                                type="text"
                                className="form-control"
                                name={500}
                              />
                            </div>
                            <div className="form-group ex zx">
                              <span className="a">a</span>
                              <input
                                type="text"
                                className="form-control"
                                name={501}
                              />
                              <label>X</label>
                              <input
                                type="text"
                                className="form-control"
                                name={502}
                              />
                              <span className="b">b</span>
                            </div>
                            <br />
                            <br />
                            <div className="form-group ex smn ll">
                              <label>to</label>
                              <span className="a">C</span>
                              <input
                                type="text"
                                className="form-control"
                                name={503}
                              />
                              <label>(Round),</label>
                              <span className="chut">D</span>
                              <input
                                type="text"
                                className="form-control"
                                name={504}
                              />
                              <label>Long</label>
                            </div>
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-inline">
                          <br />
                          <div className="form-group">
                            <label>Check One:</label>
                            <div className="row text-center">
                              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <label className="checkbox-inline">
                                  <input
                                    type="checkbox"
                                    defaultValue="FLS/FOT"
                                    name={505}
                                  />
                                  <img src="./Custom Order Request _ Air On_files/14.png" />
                                  <br />
                                  FLS/FOT
                                </label>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <label className="checkbox-inline">
                                  <input
                                    type="checkbox"
                                    defaultValue="FRS/FOT"
                                    name={505}
                                  />
                                  <img src="./Custom Order Request _ Air On_files/15.png" />
                                  <br />
                                  FRS/FOT
                                </label>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <label className="checkbox-inline">
                                  <input
                                    type="checkbox"
                                    defaultValue="O/C/FOT"
                                    name={505}
                                  />
                                  <img src="./Custom Order Request _ Air On_files/16.png" />
                                  <br />
                                  O/C/FOT
                                </label>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <label className="checkbox-inline">
                                  <input
                                    type="checkbox"
                                    defaultValue="O/C/ALL"
                                    name={505}
                                  />
                                  <img src="./Custom Order Request _ Air On_files/17.png" />
                                  <br />
                                  O/C/ALL
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="dwn">
                  <img src="./Custom Order Request _ Air On_files/dwn.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
