import primsa from '@/app/libs/prismadb';
import getCurrentUser from './getCurrentUser';

const getConversationById = async (conversationId: string) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser?.email)  return null;

        const conversation = await primsa.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                users: true
            }
        });
        return conversation;

    } catch(error:any) {
        return null;
    }
}

export default getConversationById;