import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF0000',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: -40,
        padding: 20,
        backgroundColor: '#000',
    },
    logo: {
        width: 120,
        height: 90,
        marginTop: 25,
        resizeMode: 'contain',
    },
    pageTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#FFFFFF',
        textAlign: 'right',
        marginRight: 20,
        marginVertical: 40,
    },
    appointmentList: {
        paddingHorizontal: 20,
    },
    appointmentCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    appointmentTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    confirmed: {
        color: '#00A000',
    },
    finalized: {
        color: '#808080',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    details: {
        flex: 1,
    },
    appointmentText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    appointmentTextDate: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#000',
    },
    appointmentDetail: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    actionButton: {
        marginTop: 10,
        alignItems: 'center',
        paddingVertical: 5,
    },
    actionButtonText: {
        fontSize: 14,
        color: '#FF0000',
        textDecorationLine: 'underline',
    },
    appointmentDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1,
    },
    artistContainer: {
        alignItems: 'center',
    },
    artistImage: {
        width: 110,
        height: 110,
        borderRadius: 100,
        marginLeft: 10,
    },
    artistInfo: {
        marginTop: 20,
        marginLeft: 10,
    },
    artistLabel: {
        fontSize: 16,
        marginTop: 20,
        textDecorationLine: 'underline',
        color: '#000',
    },
    artistName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});
