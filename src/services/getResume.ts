import $ from "jquery";
import ResumeData from "types/ResumeData";

export default function loadResumeFromPath(path:string, callback: (data:ResumeData)=>void) {
  $.ajax({
    url: path,
    dataType: "json",
    cache: false,
    success: function (data: ResumeData) {
      callback(data);
    },
    error: function (xhr: JQuery.jqXHR<any>, status: JQuery.Ajax.ErrorTextStatus, err:string) {
      alert(err);
    },
  });
}