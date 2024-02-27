package com.groupb.cuiz.web.quiz;

import java.nio.charset.StandardCharsets;
import java.sql.Date;
import java.util.Arrays;

public class AnswerShowDTO {
    private String member_Id;
    private String member_Nick;
    private byte[] member_Profile_Blob;
    private String sourcecode;
    private Date answer_Date;

    public String getMember_Id() {
        return member_Id;
    }

    public void setMember_Id(String member_Id) {
        this.member_Id = member_Id;
    }

    public String getMember_Nick() {
        return member_Nick;
    }

    public void setMember_Nick(String member_Nick) {
        this.member_Nick = member_Nick;
    }

    public byte[] getMember_Profile_Blob() {
        return member_Profile_Blob;
    }

    public void setMember_Profile_Blob(byte[] member_Profile_Blob) {
        this.member_Profile_Blob = member_Profile_Blob;
    }

    public String getSourcecode() {
        return sourcecode;
    }

    public void setSourcecode(String sourcecode) {
        this.sourcecode = sourcecode;
    }

    public Date getAnswer_Date() {
        return answer_Date;
    }

    public void setAnswer_Date(Date answer_Date) {
        this.answer_Date = answer_Date;
    }

    public String getMember_Profile_String(){
        if(member_Profile_Blob == null){
            return null;
        }

        return new String(member_Profile_Blob, StandardCharsets.UTF_8);
    }

    @Override
    public String toString() {
        return "AnswerShowDTO{" +
                "member_Id='" + member_Id + '\'' +
                ", member_Nick='" + member_Nick + '\'' +
                ", member_Profile_Blob=" + (member_Profile_Blob == null) +
                ", sourcecode='" + sourcecode + '\'' +
                ", answer_Date=" + answer_Date +
                '}';
    }

}
