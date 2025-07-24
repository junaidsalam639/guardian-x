"use client";
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useGetClientQuery } from '@/service/clientApi';
import { setUser } from '@/redux/authSlice';

const ClientCaseCard = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { data: clientData, isLoading } = useGetClientQuery();
    const data = clientData?.api_data?.data || [];

    const handlerNavigate = (id) => {
        dispatch(setUser({ ...user, client_id: id }));
        router.push(`/user/case-management`);
    }

    return (
        <div className="p-6">
            <div className="flex items-center mb-6 gap-3">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Client Cases
                </h1>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {isLoading && (
                    <p className="col-span-full text-gray-600 dark:text-gray-300">Loading client cases...</p>
                )}
                {data?.map((caseItem) => (
                    <Card key={caseItem?.customer_id} onClick={() => handlerNavigate(caseItem?.customer_id)} className="cursor-pointer bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400">
                        <CardHeader>
                            <p className="text-sm text-gray-500 dark:text-gray-400">ID: {caseItem?.customer_id}</p>
                            <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
                                {caseItem?.customer_name}
                            </CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ClientCaseCard;


