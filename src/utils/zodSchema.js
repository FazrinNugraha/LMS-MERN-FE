import z from 'zod'

export const signUpSchema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters")
})

// PENTING: login tidak memakai min 8 karakter, supaya user lama yang passwordnya
// pendek tetap bisa masuk (aturan password hanya berlaku saat membuat/mengganti password).
export const signInSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(1, "Password is required")
})

export const createCourseSchema = z.object({
    name: z.string().min(5),
    categoryId: z.string().min(5, "Please select a category"),
    tagline: z.string().min(5),
    description: z.string().min(10),
    thumbnail: z.any().refine((file) => file?.name, { message: "Thumbnail is required" })
})

export const updateCourseSchema = createCourseSchema.partial({
    thumbnail: true
})

// Helper function to strip HTML tags and get plain text
const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
};

export const mutateContentSchema = z.object({
    title: z.string().min(5, { message: "Title must be at least 5 characters" }),
    type: z.string().min(3, { message: "Please select a content type" }),
    youtubeId: z.string().optional(),
    text: z.string().optional()

})
    .superRefine((val, ctx) => {
        const parseVideoId = z.string().min(4).safeParse(val.youtubeId)

        if (val.type === "video") {
            if (!parseVideoId.success) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Youtube ID is required for video content",
                    path: ["youtubeId"]
                })
            }
        }
        if (val.type === "text") {
            const plainText = stripHtml(val.text);
            if (plainText.length < 4) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Text content is required (at least 4 characters)",
                    path: ["text"]
                })
            }
        }
    })

export const createStudentSchema = z.object({
    name: z.string().min(5),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    photo: z.any().refine((file) => file?.name, { message: "Photo is required" })
})

export const updateStudentSchema = createStudentSchema.omit({
    password: true,
    photo: true
})

export const addStudentToCourseSchema = z.object({
    studentId: z.string().min(1, "Please select a student"),
})