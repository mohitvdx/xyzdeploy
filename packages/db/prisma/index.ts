import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function upsertUser(userId: number, newEmail: string, newPassword: string) {
    try {
        const hashedPassword = await bcrypt.hash(newPassword, 10)

        // Check if user exists
        const user = await prisma.user.findUnique({
            where: { id: userId },
        })

        let result
        if (user) {
            // Update existing user
            result = await prisma.user.update({
                where: { id: userId },
                data: {
                    email: newEmail,
                    password: hashedPassword,
                },
            })
            console.log("User updated successfully:", result)
        } else {
            // Create new user
            result = await prisma.user.create({
                data: {
                    email: newEmail,
                    password: hashedPassword,
                },
            })
            console.log("User created successfully:", result)
        }

        return result
    } catch (error) {
        console.error("Error upserting user:", error)
        throw error
    }
}

// Test function
async function main() {
    try {
        await upsertUser(1, "newemail@example.com", "newsecurepassword")
        const allUsers = await prisma.user.findMany()
        console.log("All users:", allUsers)
    } catch (error) {
        console.error("Error in main function:", error)
    } finally {
        await prisma.$disconnect()
    }
}

main().catch((e) => {
    console.error("Unhandled error in main execution:", e)
    process.exit(1)
})
