import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
	return (
		<View style={styles.test}>
			<Text>Edit app/index.tsx to edit this screen.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	test: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
