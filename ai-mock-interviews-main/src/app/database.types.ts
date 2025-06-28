export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      followups: {
        Row: {
          id: number
          interview_question_id: number | null
          raw_answer: string | null
          transcript: string | null
        }
        Insert: {
          id?: number
          interview_question_id?: number | null
          raw_answer?: string | null
          transcript?: string | null
        }
        Update: {
          id?: number
          interview_question_id?: number | null
          raw_answer?: string | null
          transcript?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "followups_interview_question_id_fkey"
            columns: ["interview_question_id"]
            isOneToOne: false
            referencedRelation: "interview_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_questions: {
        Row: {
          id: number
          question_id: number
          raw_answer: string | null
          time_taken: number | null
          user_interview_id: number
        }
        Insert: {
          id?: number
          question_id: number
          raw_answer?: string | null
          time_taken?: number | null
          user_interview_id: number
        }
        Update: {
          id?: number
          question_id?: number
          raw_answer?: string | null
          time_taken?: number | null
          user_interview_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "interview_questions_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_questions_user_interview_id_fkey"
            columns: ["user_interview_id"]
            isOneToOne: false
            referencedRelation: "interview_details"
            referencedColumns: ["user_interview_id"]
          },
          {
            foreignKeyName: "interview_questions_user_interview_id_fkey"
            columns: ["user_interview_id"]
            isOneToOne: false
            referencedRelation: "interview_snap"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_questions_user_interview_id_fkey"
            columns: ["user_interview_id"]
            isOneToOne: false
            referencedRelation: "user_interviews"
            referencedColumns: ["id"]
          },
        ]
      }
      interviews: {
        Row: {
          created_at: string
          id: number
          max_time: number
          no_of_questions: number
          question_types: string | null
          slug: string
          tags: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          max_time: number
          no_of_questions: number
          question_types?: string | null
          slug?: string
          tags?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          max_time?: number
          no_of_questions?: number
          question_types?: string | null
          slug?: string
          tags?: string | null
          title?: string | null
        }
        Relationships: []
      }
      questions: {
        Row: {
          companies: string | null
          difficulty: number | null
          id: number
          markdown_text: string | null
          no_of_followups: number
          transcript: string
          type: Database["public"]["Enums"]["question_type"] | null
        }
        Insert: {
          companies?: string | null
          difficulty?: number | null
          id?: number
          markdown_text?: string | null
          no_of_followups?: number
          transcript?: string
          type?: Database["public"]["Enums"]["question_type"] | null
        }
        Update: {
          companies?: string | null
          difficulty?: number | null
          id?: number
          markdown_text?: string | null
          no_of_followups?: number
          transcript?: string
          type?: Database["public"]["Enums"]["question_type"] | null
        }
        Relationships: []
      }
      resume_details: {
        Row: {
          file_path: string
          summary: string | null
          user_id: string
        }
        Insert: {
          file_path: string
          summary?: string | null
          user_id?: string
        }
        Update: {
          file_path?: string
          summary?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "resume_details_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_details"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_details: {
        Row: {
          college: string | null
          company: string | null
          created_at: string
          job_title: string | null
          passing_year: string | null
          profession: Database["public"]["Enums"]["profession"]
          user_id: string
          years_of_experience: string | null
        }
        Insert: {
          college?: string | null
          company?: string | null
          created_at?: string
          job_title?: string | null
          passing_year?: string | null
          profession: Database["public"]["Enums"]["profession"]
          user_id?: string
          years_of_experience?: string | null
        }
        Update: {
          college?: string | null
          company?: string | null
          created_at?: string
          job_title?: string | null
          passing_year?: string | null
          profession?: Database["public"]["Enums"]["profession"]
          user_id?: string
          years_of_experience?: string | null
        }
        Relationships: []
      }
      user_interviews: {
        Row: {
          conversation: Json[] | null
          created_at: string
          id: number
          interview_id: number
          is_finished: boolean
          scheduled_time: string | null
          time_taken: number | null
          user_id: string | null
        }
        Insert: {
          conversation?: Json[] | null
          created_at?: string
          id?: number
          interview_id: number
          is_finished?: boolean
          scheduled_time?: string | null
          time_taken?: number | null
          user_id?: string | null
        }
        Update: {
          conversation?: Json[] | null
          created_at?: string
          id?: number
          interview_id?: number
          is_finished?: boolean
          scheduled_time?: string | null
          time_taken?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_interviews_interview_id_fkey"
            columns: ["interview_id"]
            isOneToOne: false
            referencedRelation: "interview_details"
            referencedColumns: ["original_interview_id"]
          },
          {
            foreignKeyName: "user_interviews_interview_id_fkey"
            columns: ["interview_id"]
            isOneToOne: false
            referencedRelation: "interviews"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      interview_details: {
        Row: {
          interview_created_at: string | null
          interview_id: number | null
          is_finished: boolean | null
          max_time: number | null
          no_of_questions: number | null
          original_interview_id: number | null
          question_types: string | null
          scheduled_time: string | null
          slug: string | null
          tags: string | null
          time_taken: number | null
          title: string | null
          user_id: string | null
          user_interview_created_at: string | null
          user_interview_id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_interviews_interview_id_fkey"
            columns: ["interview_id"]
            isOneToOne: false
            referencedRelation: "interview_details"
            referencedColumns: ["original_interview_id"]
          },
          {
            foreignKeyName: "user_interviews_interview_id_fkey"
            columns: ["interview_id"]
            isOneToOne: false
            referencedRelation: "interviews"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_snap: {
        Row: {
          created_at: string | null
          id: number | null
          interview_id: number | null
          is_finished: boolean | null
          max_time: number | null
          no_of_questions: number | null
          question_types: string | null
          scheduled_time: string | null
          slug: string | null
          tags: string | null
          time_taken: number | null
          title: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_interviews_interview_id_fkey"
            columns: ["interview_id"]
            isOneToOne: false
            referencedRelation: "interview_details"
            referencedColumns: ["original_interview_id"]
          },
          {
            foreignKeyName: "user_interviews_interview_id_fkey"
            columns: ["interview_id"]
            isOneToOne: false
            referencedRelation: "interviews"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      profession: "student" | "working_professional"
      question_type: "dsa" | "hr" | "intro" | "outro" | "cs_fundamental"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
