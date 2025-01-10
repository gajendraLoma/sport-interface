"use client"
import TitleCard from "@/components/cards/title-card";
const Champions: React.FC = () => {

    return (
        <>
            <TitleCard title="Active Members" topMargin="mt-2">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Joined On</th>
                        <th>Role</th>
                        <th>Last Active</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src="https://i.pravatar.cc/150?img=1" alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">name</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>email</td>
                                    <td>joinedOn</td>
                                    <td>role</td>
                                    <td>lastActive</td>
                                    </tr>
                    </tbody>
                </table>
            </div>
            </TitleCard>
            </>
    )
}

export default Champions